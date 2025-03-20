import { Accordion} from "flowbite-react";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


const Select = () => {

  // Checkbox values
  const [checkboxes, setCheckboxes] = useState({
    PSY10000: false,
    PSY30400: false,
    PSY30600: false,
    PSY48500: false,

    PSY30300: false,
    PSY30900: false,
    PSY31100: false,
    PSY32100: false,
    PSY32400: false,

    PSY31500: false,
    PSY32500: false,
    PSY32600: false,
    PSY33000: false,
    PSY33100: false,
    PSY33200: false,
    PSY33400: false,

    PSY20500: false,
    PSY20800: false,
    PSY21000: false,
    PSY31200: false,
    PSY31300: false,
    PSY36500: false,

    PSY15700: false,
    PSY18100: false,
    PSY21200: false,
    PSY21500: false,
    PSY23500: false,
    PSY30800: false,
    PSY39012: false,
    PSY45000: false,
    PSY48000: false,
  });

  // Make sure saved checkboxes are only loaded once per refresh
  var loaded = false;

  // Load the checkbox states from localStorage
  useEffect(() => {
    if (!loaded) {
      loaded = true;
      const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes'));
      setCheckboxes(savedCheckboxes);
    }
  }, []);

  // Save the checkbox states to localStorage on change
  useEffect(() => {
    localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
  }, [checkboxes]);

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Clear section
  const clearSection = (id) => {

    const clearedCheckboxes = { ...checkboxes };

    // Identify which section needs cleared
    switch (id.target.id) {
      case "major": {
        clearedCheckboxes.PSY10000 = false;
        clearedCheckboxes.PSY30400 = false;
        clearedCheckboxes.PSY30600 = false;
        clearedCheckboxes.PSY48500 = false;
        break;
      }
      case "clinical": {
        clearedCheckboxes.PSY30300 = false;
        clearedCheckboxes.PSY30900 = false;
        clearedCheckboxes.PSY31100 = false;
        clearedCheckboxes.PSY32100 = false;
        clearedCheckboxes.PSY32400 = false;
        break;
      }
      case "experimental": {
        clearedCheckboxes.PSY31500 = false;
        clearedCheckboxes.PSY32500 = false;
        clearedCheckboxes.PSY32600 = false;
        clearedCheckboxes.PSY33000 = false;
        clearedCheckboxes.PSY33100 = false;
        clearedCheckboxes.PSY33200 = false;
        clearedCheckboxes.PSY33400 = false;
        break;
      }
      case "developmental": {
        clearedCheckboxes.PSY20500 = false;
        clearedCheckboxes.PSY20800 = false;
        clearedCheckboxes.PSY21000 = false;
        clearedCheckboxes.PSY31200 = false;
        clearedCheckboxes.PSY31300 = false;
        clearedCheckboxes.PSY36500 = false;
        break;
      }
      case "general": {
        clearedCheckboxes.PSY15700 = false;
        clearedCheckboxes.PSY18100 = false;
        clearedCheckboxes.PSY21200 = false;
        clearedCheckboxes.PSY21500 = false;
        clearedCheckboxes.PSY23500 = false;
        clearedCheckboxes.PSY30800 = false;
        clearedCheckboxes.PSY39012 = false;
        clearedCheckboxes.PSY45000 = false;
        clearedCheckboxes.PSY48000 = false;
        break;
      }
    }

    setCheckboxes(clearedCheckboxes);
    localStorage.setItem('checkboxes', JSON.stringify(clearedCheckboxes));
  };

  // Clear all checkboxes
  const clearAll = () => {

    const clearedCheckboxes = { ...checkboxes };

    clearedCheckboxes.PSY10000 = false;
    clearedCheckboxes.PSY30400 = false;
    clearedCheckboxes.PSY30600 = false;
    clearedCheckboxes.PSY48500 = false;

    clearedCheckboxes.PSY30300 = false;
    clearedCheckboxes.PSY30900 = false;
    clearedCheckboxes.PSY31100 = false;
    clearedCheckboxes.PSY32100 = false;
    clearedCheckboxes.PSY32400 = false;

    clearedCheckboxes.PSY31500 = false;
    clearedCheckboxes.PSY32500 = false;
    clearedCheckboxes.PSY32600 = false;
    clearedCheckboxes.PSY33000 = false;
    clearedCheckboxes.PSY33100 = false;
    clearedCheckboxes.PSY33200 = false;
    clearedCheckboxes.PSY33400 = false;

    clearedCheckboxes.PSY20500 = false;
    clearedCheckboxes.PSY20800 = false;
    clearedCheckboxes.PSY21000 = false;
    clearedCheckboxes.PSY31200 = false;
    clearedCheckboxes.PSY31300 = false;
    clearedCheckboxes.PSY36500 = false;

    clearedCheckboxes.PSY15700 = false;
    clearedCheckboxes.PSY18100 = false;
    clearedCheckboxes.PSY21200 = false;
    clearedCheckboxes.PSY21500 = false;
    clearedCheckboxes.PSY23500 = false;
    clearedCheckboxes.PSY30800 = false;
    clearedCheckboxes.PSY39012 = false;
    clearedCheckboxes.PSY45000 = false;
    clearedCheckboxes.PSY48000 = false;

    setCheckboxes(clearedCheckboxes);
    localStorage.setItem('checkboxes', JSON.stringify(clearedCheckboxes));
  };

  return (
    <main>
      <div className="container-fluid jumbito">

        <div className="text-center jumbito-img">
          <div className="flex flex-row justify-content-center align-items-center">
            <p className="block lg:w-500 text-white lg:text-8xl md:text-6xl text-4xl lg:text-start text-center w-400 text-wrap jumbito-text">
              Select your courses!
            </p>
          </div>
        </div>
      </div>

      <div className="gold">
        <p className="period">.</p>
      </div>

      {/* SELECTION SECTION */}
      <div className="select-text bg-white pb-10">
        <p className="text-base py-5">
          Select all of the Psychology courses you have taken or plan to take as you work towards your degree.
          Once you have finished selecting your courses,
          press the "Generate Results" button at the bottom of the page to see what career paths PsychRoadMap suggests for you!
        </p>
        <p><button className="mt-2 p-1 clear text-center" onClick={clearAll}>Clear All</button></p>

        {/* MAIN ACCORDION */}
        <p className="gold my-5 py-2 text-3xl flex justify-between"><span><b>Major Coursework</b></span><span><button className="text-base border border-black py-1 px-2 clear" id="major" onClick={clearSection}>Clear</button></span></p>
        <Accordion flush={true} alwaysOpen={true} collapseAll={true}>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY10000"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY10000" name="PSY10000" value="PSY10000" onClick="e.cancelBubble" checked={checkboxes.PSY10000} onChange={handleCheckboxChange} />
                  PSY 10000 - Principles of Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course is an exploration of basic psychological concepts, methods, and findings contributing to an understanding of human behavior.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY30400"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY30400" name="PSY30400" value="PSY30400" checked={checkboxes.PSY30400} onChange={handleCheckboxChange} />
                  PSY 30400 - Basic Research Methods
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course explores the logic and methods of behavioral research. Students complete group research projects designed to reinforce pivotal concepts. Must be taken concurrently with PSY 30600.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY30600"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY30600" name="PSY30600" value="PSY30600" checked={checkboxes.PSY30600} onChange={handleCheckboxChange} />
                  PSY 30600 - Behavioral Science Statistic
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course emphasizes the application of descriptive and inferential statistics in behavioral science research. Must be taken concurrently with PSY 30400.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section end-section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY48500"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY48500" name="PSY48500" value="PSY48500" checked={checkboxes.PSY48500} onChange={handleCheckboxChange} />
                  PSY 48500 - Senior Seminar
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course is a survey of the history of psychology and recent developments in various fields within the discipline. Learning from previous coursework is consolidated and integrated. Relationships between personal characteristics and career choices are explored. Professional issues and ethics are examined.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

        </Accordion>

        {/* CLINICAL PSYCHOLOGY COURSEWORK */}
        <p className="gold my-5 py-2 text-3xl flex justify-between"><b>Clinical Psychology Coursework</b><span><button className="text-base border border-black py-1 px-2 clear" id="clinical" onClick={clearSection}>Clear</button></span></p>
        <Accordion flush={true} alwaysOpen={true} collapseAll={true}>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY30300"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY30300" name="PSY30300" value="PSY30300" checked={checkboxes.PSY30300} onChange={handleCheckboxChange} />
                  PSY 30300 - Abnormal Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course is a survey of the major classes of mental disorders. Emphasis is on understanding symptoms, the complex interaction of factors related to mental disorders, and controversies in the field.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY30900"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY30900" name="PSY30900" value="PSY30900" checked={checkboxes.PSY30900} onChange={handleCheckboxChange} />
                  PSY 30900 - Personality
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  Explores core concepts in the field of personality, with emphasis on how those concepts are integrated into personality theories and how they are evaluated scientifically. Students apply these concepts in independent projects.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY31100"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY31100" name="PSY31100" value="PSY31100" checked={checkboxes.PSY31100} onChange={handleCheckboxChange} />
                  PSY 31100 - Behavior Modification
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  An exploration of environmental influences on human behavior, with an emphasis on behavior modification procedures and behavior management.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY32100"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY32100" name="PSY32100" value="PSY32100" checked={checkboxes.PSY32100} onChange={handleCheckboxChange} />
                  PSY 32100 - Health Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  An investigation of the psychological influences on health, illness, and the physical, behavioral, and cognitive adaptation to illness. The mind-body relationship is examined through topics including exercise, stress, weight control, pain management, meditation, coping styles, psycho-immunology, and behavioral habits.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section end-section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY32400"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY32400" name="PSY32400" value="PSY32400" checked={checkboxes.PSY32400} onChange={handleCheckboxChange} />
                  PSY 32400 - Psychological Testing
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  Examines mental measurement theory and the principles of reliability, validity, and standardization as related to the construction and interpretation of tests. Tests of achievement, aptitude, intelligence, interest, and personality are studied as illustrations of the problems of measurement and the variety of solutions to those problems. Ethics of test use receives special consideration.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

        </Accordion>

        {/* EXPERIMENTAL PSYCHOLOGY COURSEWORK */}
        <p className="gold my-5 py-2 text-3xl flex justify-between"><b>Experimental Psychology Coursework</b><span><button className="text-base border border-black py-1 px-2 clear" id="experimental" onClick={clearSection}>Clear</button></span></p>
        <Accordion flush={true} alwaysOpen={true} collapseAll={true}>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY31500"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY31500" name="PSY31500" value="PSY31500" checked={checkboxes.PSY31500} onChange={handleCheckboxChange} />
                  PSY 31500 - Psychology of Prejudice
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course, broadly defined, will discuss group perceptions and interactions from a social psychological perspective and specifically on stereotyping, prejudice, and discrimination. In this course, we will examine the roots and causes of such biases, the consequences and implications, as well as prejudice reduction efforts. These biases apply broadly to all lived experiences (e.g., race, ethnicity, gender, sexuality, ability, religion, etc.).
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY32500"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY32500" name="PSY32500" value="PSY32500" checked={checkboxes.PSY32500} onChange={handleCheckboxChange} />
                  PSY 32500 - Behavioral Neuroscience
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course examines the central nervous system, the development and function of nerve cells, and brain-behavior relationships. Topics include motivation, learning, sensation and perception, movement, emotions, and brain dysfunction.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY32600"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY32600" name="PSY32600" value="PSY32600" checked={checkboxes.PSY32600} onChange={handleCheckboxChange} />
                  PSY 32600 - Sensation and Perception
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course covers the biology of the brain and sensory systems, both of which allow perceptual processing to occur. Our reality is based upon receiving sensory input and giving meaning to that input by translating incoming information into a focused perception of our environment. Each of us has our own personal reality. We will discuss the mechanisms behind our perceptual experiences, as well as the philosophical questions associated with both “normal” and “abnormal” functioning. This class primarily focuses on visual and auditory processing; however, we will also briefly explore other sensory systems and perceptual phenomena.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY33000"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY33000" name="PSY33000" value="PSY33000" checked={checkboxes.PSY33000} onChange={handleCheckboxChange} />
                  PSY 33000 - Learning and Memory
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course investigates factors involved in acquiring and changing behaviors. Theories, models, and empirical findings in the field of learning and memory are explored.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY33100"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY33100" name="PSY33100" value="PSY33100" checked={checkboxes.PSY33100} onChange={handleCheckboxChange} />
                  PSY 33100 - Cognitive Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course examines mental processes related to perception, attention, problem-solving, thinking, and decision making. Theories, concepts, and experimental methods in cognitive research are explored.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY33200"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY33200" name="PSY33200" value="PSY33200" checked={checkboxes.PSY33200} onChange={handleCheckboxChange} />
                  PSY 33200 - Psychology of Motivation and Emotion
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  An analysis of the major theories of motivation, the data on which they are based, and applications of motivation concepts.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section end-section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY33400"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY33400" name="PSY33400" value="PSY33400" checked={checkboxes.PSY33400} onChange={handleCheckboxChange} />
                  PSY 33400 - Social Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course examines the effect of the social situation on the individual. Topics include: self-perception, social cognition, social influence, attraction and relationships, attitude formation and persuasion, prejudice, and group behavior.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

        </Accordion>

        {/* DEVELOPMENTAL PSYCHOLOGY COURSEWORK */}
        <p className="gold my-5 py-2 text-3xl flex justify-between"><b>Developmental Psychology Coursework</b><span><button className="text-base border border-black py-1 px-2 clear" id="developmental" onClick={clearSection}>Clear</button></span></p>
        <Accordion flush={true} alwaysOpen={true} collapseAll={true}>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className="flex justify-between w-full gap-3">
                <label htmlFor="PSY20500"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY20500" name="PSY20500" value="PSY20500" checked={checkboxes.PSY20500} onChange={handleCheckboxChange} />
                  PSY 20500 - Human Development
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  An overview of human development from conception through death. This course provides an introduction to the study of lifespan development focusing on physical, cognitive, and social development.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className="flex justify-between w-full gap-3">
                <label htmlFor="PSY20800"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY20800" name="PSY20800" value="PSY20800" checked={checkboxes.PSY20800} onChange={handleCheckboxChange} />
                  PSY 20800 - Child Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  An introduction to factors influencing children’s social, emotional, motor, cognitive, and language development from conception to late childhood.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className="flex justify-between w-full gap-3">
                <label htmlFor="PSY21000"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY21000" name="PSY21000" value="PSY21000" checked={checkboxes.PSY21000} onChange={handleCheckboxChange} />
                  PSY 21000 - Psychology of Parenting
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  Theories and research related to parenting are discussed, with a focus on their practical application. Topics include cultural influences on parenting, social expectations of parents, discipline, fostering healthy lifestyles for children, and parenting in special circumstances including divorce, work, foster families, and gay and lesbian parents.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className="flex justify-between w-full gap-3">
                <label htmlFor="PSY31200"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY31200" name="PSY31200" value="PSY31200" checked={checkboxes.PSY31200} onChange={handleCheckboxChange} />
                  PSY 31200 - Psychology of Aging
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  Examines psychological development in later adulthood, emphasizing the internal and external influences on aging and the dynamics of continuity and change. Emotional, cognitive, and social functioning are addressed.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className="flex justify-between w-full gap-3">
                <label htmlFor="PSY31300"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY31300" name="PSY31300" value="PSY31300" checked={checkboxes.PSY31300} onChange={handleCheckboxChange} />
                  PSY 31300 - Psychology of Adolescence
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  A cultural approach to physical, intellectual, emotional, and social development during adolescence. Historical context and research are given special attention in studying the development of personal identity, changing roles in the family, school, and community, and problems of adjustment, delinquency, and drug abuse.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section end-section">
              <Accordion.Title className="flex justify-between w-full gap-3">
                <label htmlFor="PSY36500"  onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY36500" name="PSY36500" value="PSY36500" checked={checkboxes.PSY36500} onChange={handleCheckboxChange} />
                  PSY 36500 - Human Sexuality
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course is a survey of theories and research on psychological aspects of human sexual behavior. Topics include male and female sexual development, psychological and cross-cultural perspectives on sexual behavior, sexual behavior in special populations, aberrant sexual patterns, and current sexual trends in America.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

        </Accordion>

        {/* GENERAL PSYCHOLOGY COURSEWORK */}
        <p className="gold my-5 py-2 text-3xl flex justify-between"><b>General Psychology Coursework</b><span><button className="text-base border border-black py-1 px-2 clear" id="general" onClick={clearSection}>Clear</button></span></p>
        <Accordion flush={true} alwaysOpen={true} collapseAll={true}>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY15700" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY15700" name="PSY15700" value="PSY15700" checked={checkboxes.PSY15700} onChange={handleCheckboxChange} />
                  PSY 15700 - Psychology of Leadership
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  Students will learn about leadership theory, motivational theory, and emotional intelligence from a psychological perspective. The course will explore the knowledge base and skills necessary to be an effective leader in a variety of settings. Students will think critically about their own leadership abilities and examine their leadership skills and potential as they participate in self-assessments and leadership exercises.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY18100" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY18100" name="PSY18100" value="PSY18100" checked={checkboxes.PSY18100} onChange={handleCheckboxChange} />
                  PSY 18100 - Cultural Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course introduces general theories and methods related to culture and diversity. Students learn about the role of culture in human development, examine social relationships, and explore how culture molds cognitive processes, perception, and morality. Students explore the bridge between cultural psychology and identity enabling them to evaluate key concepts including gain a better understanding about group identity formation, stereotyping, prejudice, stigma, and multiculturalism through a cross-cultural framework. Students utilize research methods and analytical techniques of culture psychology to critically examining the topics covered in the course.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY21200" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY21200" name="PSY21200" value="PSY21200" checked={checkboxes.PSY21200} onChange={handleCheckboxChange} />
                  PSY 21200 - Japanese Culture, Society, and Mind
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course is offered as a GE-HC:ForCul/HD course and delves into a variety of different aspects of Japanese culture, society, and mind from the traditional to the more modern. Some topic areas include customs, language, pop culture, holidays, etiquette, culture-envy, and philosophy. Emphasis is placed on anthropological, sociological, and psychological aspects of Japan and its people.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY21500" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY21500" name="PSY21500" value="PSY21500" checked={checkboxes.PSY21500} onChange={handleCheckboxChange} />
                  PSY 21500 - Careers in Psychology
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course orients students to the discipline of psychology. Topics include the role of research in the field, and the range of specialty fields within the discipline. Provides guidance in the use of APA style and library databases, and explores careers related to the major.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY23500" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY23500" name="PSY23500" value="PSY23500" checked={checkboxes.PSY23500} onChange={handleCheckboxChange} />
                  PSY 23500 - Death, Dying, Life, & Living
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course encourages students to consider and plan for the psychological, medical, ethical, legal, cultural, and financial aspects of death, as well as the role of death awareness in cultivating meaning and joy in life.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY30800" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY30800" name="PSY30800" value="PSY30800" checked={checkboxes.PSY30800} onChange={handleCheckboxChange} />
                  PSY 30800 - Psychology of Women & Gender
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  Explores the historical, biological, psychological, sociological, and multicultural factors that shape women’s lives and influence gender development and identity throughout the lifespan. Emphasis includes psychological research and theoretical frameworks that possibly explain gender similarities and differences. Also examines how gender impacts body image, victimization, physical and mental health, pregnancy and parenthood, achievement, and work experiences.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY39012" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY39012" name="PSY39012" value="PSY39012" checked={checkboxes.PSY39012} onChange={handleCheckboxChange} />
                  PSY 39012 - Special Topics: Memory in the Media
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  no description provided.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY45000" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY45000" name="PSY45000" value="PSY45000" checked={checkboxes.PSY45000} onChange={handleCheckboxChange} />
                  PSY 45000 - Psychology Practicum
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  This course provides opportunities for advanced students to explore applications of psychology in independently-arranged off-campus supervised practicum experiences. Practica require mastery of psychological concepts related to the designated situation. Repeatable at two different practicum sites but can only count as one elective in the general cluster.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

          <Accordion.Panel>
            <div className="section end-section">
              <Accordion.Title className='flex justify-between w-full gap-3'>
                <label htmlFor="PSY48000" onClick="e.cancelBubble">
                  <input type="checkbox" id="PSY48000" name="PSY48000" value="PSY48000" checked={checkboxes.PSY48000} onChange={handleCheckboxChange} />
                  PSY 48000 - Psychology Research Lab
                </label>
              </Accordion.Title>
              <Accordion.Content>
                <p className="desc">
                  Students will plan, execute and report on a project in consultation with a faculty mentor.
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Panel>

        </Accordion>

        <div className="flex justify-center align-items-center mt-10">
          <Link to="/results" className="secondary rounded-xl lg:my-auto lg:w-100 w-60 my-20 px-5 py-20 text-4xl text-center"><b>GET RESULTS</b></Link>
        </div>

      </div>
      <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    </main >
  );
};

export default Select;