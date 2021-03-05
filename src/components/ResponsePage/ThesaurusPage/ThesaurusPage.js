import { Fragment, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import tw from 'tailwind-styled-components';
import {
  chakra,
  Box,
  useColorModeValue,
  SkeletonText,
  Heading,
  ListItem,
  UnorderedList,
  useMediaQuery,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Portal
} from '@chakra-ui/react'
import { Presets } from 'react-component-transition';

const ThesaurusHeader = tw.h1`
    italic
    font-serif
    text-3xl
    font-bold
    inline-block
`
const ChakraThesaurusHeader = chakra(ThesaurusHeader)

const WordTypeContainer = styled.div`
border-radius: 29px;
text-align: left;
width: auto;
height: auto;
padding-left: 20px;
padding-right: 20px;
padding-top: 15px;
padding-bottom: 20px;
word-spacing: 0;
`

const ChakraWordTypeContainer = chakra(WordTypeContainer)

const WordAndType = tw.div`
    mt-1
`

const TheWord = tw.h1`
    text-5xl
    font-serif
    font-bold
    inline-block
`

const ChakraTheWord = chakra(TheWord)


const TheType = tw.span`
    text-xl
    font-bold
    font-serif
`

const ChakraTheType = chakra(TheType)

const SynAntHeader = tw.h2`
    font-bold
    text-2xl
    mt-3
`

const ChakraSynAntHeader = chakra(SynAntHeader)

const SynAntContainer = tw.div`
    mt-2
    relative pl-6
`

const Example = tw.span`
    text-xl
    block
`

const ChakraExample = chakra(Example)

const Text = tw.span`
    text-gray-700
    text-xl
`

const ChakraText = chakra(Text)

const LinkCSS = `
  py-2
  px-4
  rounded-xl
  shadow-xl
  inline-block
  focus:outline-none
  focus:border
  focus:ring-2 focus:ring-blue-500
  transition duration-500 ease-in-out
  m-4
`

export const ThesaurusPage = (
    {
      Link,
      BackButtonClick,
      ReturnedWord,
      PartOfSpeech,
      ShortDef,
      ReactHtmlParser,
      WordExample,
      getPathName,
      WordsLoaded,
      Syns,
      Ants,
      PathName,
      onTabClick,
      AvailableWordType
}) => {

  const OrderSynonyms = () => {
    let Synonyms = []
    if (Syns !== undefined) {
       Synonyms = Syns.map((word, index) => {
        if (Syns[index + 1] === undefined) {
          return <ListItem listStyleType='none' display='inline-block' key={word}>{`${word}`}</ListItem>
        } else {
          return <ListItem listStyleType='none' display='inline-block' key={word}>{`${word},\u00A0`}</ListItem>
        }
      })
    }
    return Synonyms
  }

  const turnWordToList = (MainObj, ) => {} //TODO Add turnWordToList function for Syn and Ant

  const OrderAntonyms = () => {
    let Antonyms = []
    if (Ants !== undefined) {
      Antonyms = Ants.map((word, index) => {
        if (Ants[index + 1] === undefined) {
          return <ListItem listStyleType='none' display='inline-block' key={word}>{`${word}`}</ListItem>
        } else {
          return <ListItem listStyleType='none' display='inline-block' key={word}>{`${word},\u00A0`}</ListItem>
        }
      })
    }
    return Antonyms
  }
  
  const location = useLocation()
  useEffect(() => {
    getPathName(location.pathname)
  })

  const LinkChak = chakra(Link);
  const bg = useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.08)');
  const color = useColorModeValue('#252d3d', '#edf2f7');
  const fontColorMain = useColorModeValue('gray.700', '#edf2f7')
  const fontColorHeaders = useColorModeValue('#2563EB', '#db8b02')
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange')
  const fontColorSynAnt = useColorModeValue('#3B82F6', 'orange.300')
  const hover = useColorModeValue({background: "gray.200"}, {background: "gray.700"});
  const gradientbg = useColorModeValue('linear(to-l, gray.200, white)')
  const boxShadow = useColorModeValue('0px 0px 25px #a1a1a1, -10px -10px 0px #3B82F6', '0px 0px 11px #1c1c1c, -10px -10px 0px orange')
  const SkeletonStartColor = useColorModeValue('#3B82F6', 'orange.200')
  const SkeletonEndColor = useColorModeValue('gray.700', 'orange.500')
  const focusBorderColorGeneral = useColorModeValue({boxShadow: '0 0 0 3px #3B82F6'}, {boxShadow: '0 0 0 3px orange'})
  const isLargerthan440 = useMediaQuery("(max-width: 440px)")
  const Tabshover = useColorModeValue({color: '#3B82F6'}, {color: "orange"});

  const TheWholeThesaurus = () => (
                  <ChakraWordTypeContainer boxShadow={boxShadow} bgGradient={gradientbg} m={(isLargerthan440) && '5'} ml={['0', '9em', null]} mr={['0', '9em', null]} marginTop={['3', null, null]}>
                      <ChakraThesaurusHeader color={fontColorDarkWhiteSmallWords}>
                        Thesaurus
                      </ChakraThesaurusHeader>
                  {(WordsLoaded) ? 
                    <Presets.TransitionFade>
                      <WordAndType>
                      <Presets.TransitionFade>
                          <ChakraTheWord color={fontColorMain}>
                              {ReturnedWord}
                          </ChakraTheWord>
                          </Presets.TransitionFade>
                          <ChakraTheType color={fontColorDarkWhiteSmallWords}>
                            {PartOfSpeech}
                          </ChakraTheType>
                      </WordAndType>
                      <ChakraSynAntHeader color={fontColorHeaders} >
                        Synonyms & Antonyms of <em>{ReturnedWord}</em>
                      </ChakraSynAntHeader>
                      <SynAntContainer>
                        <ChakraText color={fontColorMain} >
                          {ShortDef} 
                        </ChakraText>
                        {(ShortDef.slice(0, 5) === WordExample.slice(0, 5))
                         ?
                         <></>
                         :
                         <ChakraExample color={fontColorSynAnt}> <strong>//</strong> {ReactHtmlParser(WordExample)} 
                        </ChakraExample>
                         }
                        <Heading mb='1' mt='2' fontSize='2xl' fontFamily='sans-serif' color={fontColorHeaders}>Synonyms for <chakra.span fontStyle='italic'>{ReturnedWord}</chakra.span></Heading>
                        <Box w={['100%','70%', null]}>
                        <UnorderedList fontFamily='sans' fontSize='lg' ml='0' color={fontColorSynAnt}>{OrderSynonyms()}</UnorderedList>
                        </Box>
                        {(Ants !== undefined) 
                        ?
                        <div>
                          <Heading mb='1' mt='4' fontSize='2xl' fontFamily='sans-serif' color={fontColorHeaders}>Antonyms for <chakra.span fontStyle='italic'>{ReturnedWord}</chakra.span></Heading>
                          <Box w={['100%','70%', null]}>
                            <UnorderedList fontFamily='sans' fontSize='lg' ml='0' color={fontColorSynAnt}>{OrderAntonyms()}</UnorderedList>
                          </Box>
                        </div>
                        :
                        <></>
                          }
                      </SynAntContainer>
                    </Presets.TransitionFade>
                    :
                    <Presets.TransitionFade>
                    <SkeletonText mt="4" mb='3' noOfLines={11} spacing="4" startColor={SkeletonStartColor} endColor={SkeletonEndColor}  />
                    </Presets.TransitionFade>
                  }
              </ChakraWordTypeContainer>
  )


    return (
            <Fragment>
              {ReturnedWord.length 
              ?
                <Box zIndex='sticky' className='fixed top-0' left={[null, '32', null]}>
                  <LinkChak _focus={focusBorderColorGeneral} bg={bg} color={color} _hover={hover} onClick={BackButtonClick} className={LinkCSS} to='/'>
                    Back to search
                  </LinkChak>
                </Box>
              :
                <></>
              }
              <Tabs align='center' variant="soft-rounded">
              {/* <Box className='backdrop-blur z-50' display='flex' justifyContent='center' h='22' width='full'  position='fixed' bottom='0'> */}
                <TabList marginTop='1'>
                {(AvailableWordType.noun) ? ((Object.keys(AvailableWordType).length === 1) ? <></> : 
                  <Tab onClick={() => onTabClick('noun')} _hover={Tabshover} _selected={{ color: color, bg: bg  }} _focus={focusBorderColorGeneral} outline='none' outlineColor='initial' style={{outlineStyle: 'none' }}>Noun</Tab>
                  )
                  :
                  <></>
                }
                {(AvailableWordType.verb) ? ((Object.keys(AvailableWordType).length === 1) ? <></> : 
                  <Tab onClick={() => onTabClick('verb')} _hover={Tabshover} _selected={{ color: color, bg: bg  }} _focus={focusBorderColorGeneral} outline='none' outlineColor='initial' style={{outlineStyle: 'none' }}>Verb</Tab>
                  )
                  :
                  <></>
                }
                {(AvailableWordType.adjective) ? ((Object.keys(AvailableWordType).length === 1) ? <></> :
                  <Tab onClick={() => onTabClick('adjective')} _hover={Tabshover} _selected={{ color: color, bg: bg  }} _focus={focusBorderColorGeneral} outline='none' outlineColor='initial' style={{outlineStyle: 'none' }}>Adjective</Tab>
                  )
                  :
                  <></>
                }
                </TabList>
                {/* </Box> */}
                <TabPanels>
                  <TabPanel>
                  {TheWholeThesaurus()}
                  </TabPanel>
                  <TabPanel>
                  {TheWholeThesaurus()}
                  </TabPanel>
                  <TabPanel>
                  {TheWholeThesaurus()}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Fragment>
    )
}