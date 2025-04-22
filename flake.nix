{
  description = "Flake with development shells for PsychRoadMap";

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = {
    self,
    nixpkgs,
  }: let
    # List of systems that will be targeted automatically
    defaultSystems = ["x86_64-linux"];

    # Nixpkgs settings
    pkgsFor = system: (import nixpkgs {
      inherit system;
      overlays = [self.overlays.default];
    });

    # Helper function for creating multiple derivations
    forEachDefaultSystem = fn:
      nixpkgs.lib.genAttrs defaultSystems (system:
        fn {
          pkgs = pkgsFor system;
        });
  in {
    overlays.default = final: prev: let
      nodeVersion = 23;
    in {
      nodejs = prev."nodejs_${toString nodeVersion}";
    };

    devShells = forEachDefaultSystem ({pkgs}: {
      # Default development shell
      default = pkgs.mkShell {
        packages = with pkgs; [nodejs deno podman];
        shellHook = ''
          # Trick Docker apps into using Podman
          export DOCKER_HOST="unix://$XDG_RUNTIME_DIR/podman/podman.sock";
        '';
      };
    });
  };
}
