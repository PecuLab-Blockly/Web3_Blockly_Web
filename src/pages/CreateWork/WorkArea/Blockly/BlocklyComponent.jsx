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
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React, { useEffect, useRef } from 'react'
import './BlocklyComponent.css'
import Blockly from 'blockly/core'
import { javascriptGenerator } from 'blockly/javascript'
import locale from 'blockly/msg/en'
import 'blockly/blocks'

Blockly.setLocale(locale)

function BlocklyComponent(props) {
  const blocklyDiv = useRef()
  const toolbox = useRef()
  const primaryWorkspace = useRef(null)

  const generateCode = () => {
    const code = javascriptGenerator.workspaceToCode(primaryWorkspace.current)
    // console.log(code);
    props.onValueChange(code)
  }

  useEffect(() => {
    const { initialXml, children, ...rest } = props
    if (!primaryWorkspace.current) {
      primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox.current,
        ...rest
      })
    }

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        primaryWorkspace.current
      )
    }
  }, [props])

  return (
    <React.Fragment>
      <button onClick={generateCode} className='runBtn'>
        Run
      </button>
      <div ref={blocklyDiv} className='blocklyDiv' />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default BlocklyComponent
