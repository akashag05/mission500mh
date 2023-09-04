import React, { Component } from 'react';

class FaqArea extends Component {

    componentDidMount() {
        new Accordion('.accordion-container');
    }



    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h2 className="section__title">Have any Question?</h2>
                                <p className="section__meta">frequently asked questions</p>
                            </div>
                            <div className="faq-img-box">
                                <img src="/images/faq.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What is Lorem Ipsum?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dui vel turpis pretium, eu luctus odio elementum. Morbi ornare suscipit bibendum. Cras posuere metus nec turpis ultricies, at tincidunt mauris iaculis. Donec maximus eros nec lacus interdum, id congue metus sagittis.
                                        </p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What is Lorem Ipsum?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dui vel turpis pretium, eu luctus odio elementum. Morbi ornare suscipit bibendum. Cras posuere metus nec turpis ultricies, at tincidunt mauris iaculis. Donec maximus eros nec lacus interdum, id congue metus sagittis.
                                        </p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What is Lorem Ipsum?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dui vel turpis pretium, eu luctus odio elementum. Morbi ornare suscipit bibendum. Cras posuere metus nec turpis ultricies, at tincidunt mauris iaculis. Donec maximus eros nec lacus interdum, id congue metus sagittis.
                                        </p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What is Lorem Ipsum?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dui vel turpis pretium, eu luctus odio elementum. Morbi ornare suscipit bibendum. Cras posuere metus nec turpis ultricies, at tincidunt mauris iaculis. Donec maximus eros nec lacus interdum, id congue metus sagittis.
                                        </p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What is Lorem Ipsum?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dui vel turpis pretium, eu luctus odio elementum. Morbi ornare suscipit bibendum. Cras posuere metus nec turpis ultricies, at tincidunt mauris iaculis. Donec maximus eros nec lacus interdum, id congue metus sagittis.
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Let’s do the right thing now</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus. There are many variations of eration in some form.
                                        </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Join your hand with us for a better life</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus. There are many variations of eration in some form.
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqArea;