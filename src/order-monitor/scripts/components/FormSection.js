import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';


class FormSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <section className="form-section">
                <Form inline>
                    <FormGroup>
                        <ControlLabel>下单时间</ControlLabel>
                        <FormControl.Static className="datetime-wrap">
                            <DateTimeField inputFormat="YYYY-MM-DD  h:mm A" />
                        </FormControl.Static>
                        <FormControl.Static className="datetime-wrap">
                            <DateTimeField inputFormat="YYYY-MM-DD  h:mm A" />
                        </FormControl.Static>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>城市</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">全国</option>
                            <option value="other">北京</option>
                            <option value="other">广州</option>
                            <option value="other">深圳</option>
                            <option value="other">上海</option>
                            <option value="other">杭州</option>
                            <option value="other">苏州</option>
                        </FormControl>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">店铺名称</option>
                            <option value="other">店铺ID</option>
                            <option value="other">小二ID</option>
                            <option value="other">小二主管</option>
                        </FormControl>
                        <FormControl type="text" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>订单来源</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">全部</option>
                            <option value="other">闪电购</option>
                            <option value="other">手淘</option>
                            <option value="other">美团</option>
                            <option value="other">饿了么</option>
                            <option value="other">自营批发订单</option>
                            <option value="other">其它</option>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit">
                        查询
                    </Button>
                </Form>
            </section>
        );
    }
}

export default FormSection;
