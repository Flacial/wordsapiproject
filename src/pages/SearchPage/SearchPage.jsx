/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import tw from 'tailwind-styled-components';
import { useLocation, withRouter, Link as ReachLink } from 'react-router-dom';
import { useEffect, React, useRef } from 'react';
import {
  Heading,
  Input,
  Box,
  chakra,
  Fade,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  useColorModeValue,
  IconButton,
  useMediaQuery,
  Button,
  InputLeftElement,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { InfoIcon, SearchIcon } from '@chakra-ui/icons';

const MainContainer = tw.div`
   text-center
   mt-40
   sm:mt-0
   md2:mt-38
   lg:mt-32
`;

const SearchPage = ({
  WordFindType, WordFind, isOpen,
  getInputValue, HandleSearchButtonClick, getPathName, getWords, history,
}) => {
  const [isMoreThan420px] = useMediaQuery('(max-width: 420px)');
  const location = useLocation();
  const fontColorDarkWhiteSmallWords = useColorModeValue('#3B82F6', 'orange');
  const hover = useColorModeValue({ color: '#3B82F6' }, { color: 'orange' });
  const hoverShadowNeonDark = useColorModeValue({ background: 'gray.200' }, { boxShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 7px #FFF, 0 0 3px #49ff18, 0 0 5px #c75600, 0 0 10px #c75600, 0 0 10px #c75600, 0 0 20px #c75600' });
  const fontColorMain = useColorModeValue('#edf2f7', 'gray.800');
  const focusBorderColorInput = useColorModeValue('#3B82F6', '#ffa500');
  const focusBorderColorGeneral = useColorModeValue({ boxShadow: '0 0 0 3px #3B82F6' }, { boxShadow: '0 0 0 3px orange' });
  const inputField = useRef(null);
  const textShadow = useColorModeValue('0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.1), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.10);',

    '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);');

  const HandleFocusOnInputEnterCtrlShift = (event) => {
    if (event.key === 'A' && event.ctrlKey) {
      event.preventDefault();
      inputField.current.focus();
    }
  };

  const HandleEnterKey = (event) => {
    if (event.which === 13) {
      getWords();
      history.push('/thesaurus');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', HandleFocusOnInputEnterCtrlShift);
    return () => {
      document.removeEventListener('keydown', HandleFocusOnInputEnterCtrlShift);
    };
  });

  useEffect(() => {
    getPathName(location.pathname);
  });

  return (
    <MainContainer>
      <Box display="flex" alignContent="center" justifyContent="center" mt={['12', null, '15', '0', '32']} mb={['5', null, '12']}>
        <Heading textShadow={textShadow} mt={['-20', 0, 0]} mb={[0, 10, null]} fontFamily="Playfair Display" fontSize={['3xl', '5xl', '6xl']} whiteSpace="nowrap">
          Words to be thesaurused
          {/* {(isMoreThan420px) ? '\u00A0' : ' thesaurused'} */}
        </Heading>
        {/* <Popover placement="auto-end" display="inline-block">
          <PopoverTrigger>
            {(isMoreThan420px)
              ? <Heading textDecoration="underline wavy" mt={['-20', 0, 0]} textShadow={textShadow} _hover={[null, null, hover]} cursor="pointer" fontFamily="Playfair Display" fontSize={['3xl', '5xl', '6xl']} whiteSpace="nowrap">thesaurused</Heading>
              : <IconButton variant="ghost" outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} _focus={focusBorderColorGeneral} ml="2" size="sm" icon={<InfoIcon w="5" h="5" />} />}
          </PopoverTrigger>
          <PopoverContent mt={['-20', 0, 0]} outline="none" outlineColor="initial" style={{ outlineStyle: 'none' }} _focus={focusBorderColorGeneral} background={fontColorMain}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontFamily="Playfair Display" fontSize={['xl']} fontWeight="bold">Thesaurus</PopoverHeader>
            <PopoverBody>
              A thesaurus (plural thesauri or thesauruses) or synonym dictionary
              is a reference work for finding synonyms and sometimes antonyms of words.
            </PopoverBody>
          </PopoverContent>
        </Popover> */}
      </Box>
      <Box display={{ sm: 'flex', md: 'flex' }} justifyContent={[null, 'center', null]}>
        <Box>
          <Box justifyContent="center" display="flex" w={['100%', 'xs', null]}>
            <Box w={['18rem', 'xs', null]} position="relative">
              <Input boxShadow={textShadow} ref={inputField} _hover={hoverShadowNeonDark} _focus={hoverShadowNeonDark} focusBorderColor="transparent" onKeyPress={HandleEnterKey} variant="filled" w={['18rem', 'xs', null]} rounded="xl" mr={[null, null, '2rem']} onChange={getInputValue} paddingY="5" placeholder="Search for words" paddingLeft="9" />
              <SearchIcon position="absolute" left="3" top="3.5" />
            </Box>
          </Box>
          {WordFind
                && (
                <Fade in={isOpen}>
                  <Box mt="2" display="flex" justifyContent={['center', 'flex-start', null]} transition="ease">
                    <chakra.svg mt="1" ml={[null, '4', null]} outline="none" stroke="currentColor" fill="red.400" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z" />
                    </chakra.svg>
                    <chakra.span ml="1" mb={['-1', 0, 0]} color="red.400">
                      {(WordFindType === 'no response' ? 'Word not found! (Misspelled)' : ((WordFindType === 'no input') ? 'Input is empty, type a word!' : 'The word is not in the thesaurus!'))}
                    </chakra.span>
                  </Box>
                </Fade>
                )}
        </Box>

        {
          !isMoreThan420px && (
            <Box ml={[0, 6, null]} mt={[5, 1, 0]}>
              <Button
                _hover={hoverShadowNeonDark}
                _focus={hoverShadowNeonDark}
                color="gray.800"
                bgColor="gray.100"
                as={ReachLink}
                onClick={HandleSearchButtonClick}
                to="/thesaurus"
                borderRadius="xl"
                boxShadow={textShadow}
              >
                <Text>
                  Search
                </Text>
              </Button>
            </Box>
          )
        }

      </Box>
    </MainContainer>
  );
};

export default withRouter(SearchPage);
