import React, { Component } from 'react';
import {
  LocaleProvider,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
} from 'antd';
import arEG from 'antd/es/locale-provider/ar_EG'
import 'moment/locale/ar';
import './antd.rtl.css';

const FormItem = Form.Item;
const Option = Select.Option;

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={arEG}>
        <div style={{ marginTop: 100, direction: 'rtl' }}>
          <Form layout="horizontal">
            <FormItem
              label="رقم المدخلات"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <InputNumber
                min={1}
                max={10}
                style={{ width: 100 }}
                defaultValue={3}
                name="inputNumber"
              />
            </FormItem>

            <FormItem
              label="مفتاح كهربائي"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Switch defaultChecked name="switch" />
            </FormItem>

            <FormItem
              label="المنزلق"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Slider defaultValue={70} />
            </FormItem>

            <FormItem
              label="تحديد"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Select defaultValue="lucy" style={{ width: 192 }} name="select">
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="disabled" disabled>
                  disabled
                </Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>

            <FormItem
              label="منتقي التاريخ"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <DatePicker name="startDate" />
            </FormItem>
            <FormItem
              style={{ marginTop: 48 }}
              wrapperCol={{ span: 8, offset: 8 }}
            >
              <Button size="large" type="primary" htmlType="submit">
                حسنا
              </Button>
              <Button size="large" style={{ marginRight: 8 }}>
                إلغاء
              </Button>
            </FormItem>
          </Form>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
