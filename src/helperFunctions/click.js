import React, { useState, useEffect } from 'react';
import { useHistory  } from 'react-router-dom';

const Click = (path) => {
    const { push } = useHistory();

    push(`/${path}`)
}

export default Click;