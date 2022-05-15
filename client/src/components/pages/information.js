import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Information() {
    return (
        <div className='information'><h5>
            <p className='page_detail' >
               <h1>Bracycephalic animals</h1>
            </p>
            <p>
              Bracycephalic animals are those typically with squishy flat faces.  Bracycephalic cats include exotic shorthairs and Persians.  Bracycephalic dogs include bulldogs.
            </p>
            <p>
              A number of medical conditions are seen at a much higher rate in these animals including:
                <ul>
                  <li> narrowed nasal passages, causing breathing difficulties and frequent sinus infections</li>
                  <li> bulging eyes (proptosis), leading in increased eye iritation, injury and discharge</li>
                  <li> increased dental issues, often resulting in teeth requiring extraction</li>
                </ul>
            </p>
            <p></p>
            <h1>Fold animals</h1>
            <p>
                The most commonly recognised fold animal is the Scottish Fold cat, with its pulled-down ears.  
            </p>
            <p>
            Unfortunately the genes that give this appearance affect collagen on other areas of the body, causing issues such as:
            <ul>
              <li> early onset arthritis, particularly in the back legs</li>
              <li> chronic back pain and reduced mobility</li>
            </ul>
            </p></h5>
        </div>
    )
}