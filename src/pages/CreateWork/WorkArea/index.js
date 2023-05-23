/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */
import React, { useState } from 'react';
// import './../CreateWork.scss'

import BlocklyComponent, {
  Block,
  Value,
  Field,
  Shadow,
  Category
} from './Blockly';

import './blocks/customblocks';
import './generator/generator';

function WorkArea(props) {

  return (
    <div>
      <BlocklyComponent onValueChange={props.onValueChange}
        readOnly={false}
        trashcan={true}
        // media={'media/'}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        grid={{
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        }}
      >
        <Category name="Logic">
          <Block type="controls_if" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_boolean" />
          {/* <Block type="logic_null" disabled="true" /> */}
          <Block type="logic_ternary" />
        </Category>
        <Category name="Loops">
          <Block type="controls_repeat" />
          <Block type="controls_whileUntil" />
          <Block type="controls_for" />
          <Block type="controls_forEach" />
        </Category>
        <Category name="Math">
          <Block type="math_number" />
          <Block type="math_arithmetic" />
          <Block type="math_single" />
          <Block type="math_trig" />
          <Block type="math_constant" />
          <Block type="math_round" />
          <Block type="math_on_list" />
          <Block type="math_modulo" />
          <Block type="math_constrain" />
          <Block type="math_random_int" />
          <Block type="math_random_float" />
        </Category>
        <Category name="Lists">
          <Block type="lists_create_with" />
          <Block type="lists_create_empty" />
          <Block type="lists_length" />
          <Block type="lists_isEmpty" />
          <Block type="lists_indexOf" />
          <Block type="lists_getIndex" />
          <Block type="lists_setIndex" />
          <Block type="lists_getSublist" />
          <Block type="lists_split" />
        </Category>
        <Category name="Text">
          <Block type="text" />
          <Block type="text_join" />
          <Block type="text_append" />
          <Block type="text_length" />
          <Block type="text_isEmpty" />
          <Block type="text_indexOf" />
          <Block type="text_charAt" />
          <Block type="text_getSubstring" />
          <Block type="text_changeCase" />
          <Block type="text_trim" />
          <Block type="text_print" />
        </Category>
        <Category name="Variables" custom="VARIABLE"></Category>
        <Category name="Functions" custom="PROCEDURE"></Category>
        <Category name="Others">
          <Block type="draw_shapes" />
        </Category>


      </BlocklyComponent>
    </div>
  );
}

export default WorkArea;
