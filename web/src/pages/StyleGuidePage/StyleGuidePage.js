import React from 'react'
import { Styled } from 'theme-ui'
import { TypeStyle, ColorPalette } from '@theme-ui/style-guide'

import FormLayout from 'src/layouts/FormLayout/FormLayout'

const StyleGuidePage = () => {
  return (
    <FormLayout>
      <React.Fragment key="styleGuide">
        <Styled.h1>Style Guide</Styled.h1>
        <Styled.h2>Color Palette</Styled.h2>
        <ColorPalette />
        <Styled.h2>Heading Style</Styled.h2>
        <TypeStyle
          fontFamily="heading"
          fontWeight="heading"
          lineHeight="heading"
        >
          The quick brown fox jumps over the lazy dog.
        </TypeStyle>
        <Styled.h2>Body Style</Styled.h2>
        <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body">
          The quick brown fox jumps over the lazy dog.
        </TypeStyle>
        <Styled.h2>Monospace Style</Styled.h2>
        <TypeStyle
          fontFamily="monospace"
          fontWeight="monospace"
          lineHeight="monospace"
        >
          The quick brown fox jumps over the lazy dog.
        </TypeStyle>
      </React.Fragment>
    </FormLayout>
  )
}

export default StyleGuidePage
