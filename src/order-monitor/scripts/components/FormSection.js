import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';


class FormSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    _onSubmit(e) {
        e.preventDefault();
        const { actions } = this.props;
        const data = {
            start: this.refs.start.state.inputValue,
            end: this.refs.end.state.inputValue,
            city: findDOMNode(this.refs.city).value,
            classify: findDOMNode(this.refs.classify).value,
            keywords: findDOMNode(this.refs.keywords).value,
            source: findDOMNode(this.refs.source).value
        }
        actions.search(data);
    }

    render() {
        return (
            <section className="form-section">
                <Form inline>
                    <FormGroup>
                        <ControlLabel>下单时间</ControlLabel>
                        <FormControl.Static className="datetime-wrap">
                            <DateTimeField ref="start"
                                           inputFormat="YYYY-MM-DD  h:mm A" />
                        </FormControl.Static>
                        <FormControl.Static className="datetime-wrap">
                            <DateTimeField ref="end"
                                           inputFormat="YYYY-MM-DD  h:mm A" />
                        </FormControl.Static>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>城市</ControlLabel>
                        <FormControl ref="city"
                                     componentClass="select"
                                     placeholder="select">
                            <option value="select">全国</option>
                            <option value="other">北京</option>
                            <option value="other">广州</option>
                            <option value="other">深圳</option>
                            <option value="other">上海</option>
                            <option value="other">杭州</option>
                            <option value="other">苏州</option>
                        </FormControl>
                        <FormControl ref="classify"
                                     componentClass="select"
                                     placeholder="select">
                            <option value="select">店铺名称</option>
                            <option value="other">店铺ID</option>
                            <option value="other">小二ID</option>
                            <option value="other">小二主管</option>
                        </FormControl>
                        <FormControl ref="keywords"
                                     type="text"
                                     placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>订单来源</ControlLabel>
                        <FormControl ref="source"
                                     componentClass="select"
                                     placeholder="select">
                            <option value="select">全部</option>
                            <option value="other">闪电购</option>
                            <option value="other">手淘</option>
                            <option value="other">美团</option>
                            <option value="other">饿了么</option>
                            <option value="other">自营批发订单</option>
                            <option value="other">其它</option>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit"
                            onClick={this._onSubmit.bind(this)}>
                        查询
                    </Button>
                </Form>
            </section>
        );
    }
}

export default FormSection;
