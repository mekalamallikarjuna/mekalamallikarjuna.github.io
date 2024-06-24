// ImageFonts.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const ImageFonts = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Image & Fonts");
    return (<h1> Image & Fonts:</h1>);
}

export default ImageFonts;
