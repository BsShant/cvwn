import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem =(props)=>{
  // const [value, setValue] = useState(props.value)
  // setValue(props.value)
    return(
        <Form.Item
        label={props.label}
        name={props.name}
        hidden={props.hidden}
        rules={[
          {
            required: props.required ? false: true,
            message: `Please input your ${props.label}!`,
          },
        ]}
        // initialValue={props.value}
        // initialValue={value}
        
      >
        {props.Textarea?
        <Input.TextArea style={{height:`${props.height? props.height:'auto'}`}}  />
        :
          <Input style={{height:`${props.height? props.height:'auto'}`}} />
        }
        </Form.Item>
    )
}
export default FormItem;