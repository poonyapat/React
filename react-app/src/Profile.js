import React, { Component } from 'react';
import './App.css';
import './basic.css';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            general: {
                name: "General",
                firstName: "Poonyapat",
                lastName: "Yanvisit",
                age: 20,
                gender: "Male",
                job: "Student",
                adress: {
                    city: "Bangkok",
                    country: "Thailand"
                }
            },
            education: {
                name: "Education",
                primarySchool: "Bangkok Christian College",
                secondarySchool: "Bangkok Christian College",
                bachelorsDegree: {
                    university: "Kasetsart Univsersity",
                    faculty: "Science",
                    department: "Computer Science"
                }
            },
            programming: {
                name: "Programming",
                programmingLanguage: {
                    python: "Pandas, Matplotlib and On Studying",
                    java: "Javafx and Maven",
                    c: "Basic",
                    cPlusPlus: "Basic",
                    cSharp: "Unity",
                    html: "Normal",
                    css: "Normal",
                    js: "On Studying",
                    others: ["Unix", "Photoshop", "Excel", "MongoDB"]
                }
            },
            activity: {
                name: "Activity",
                game: ["League of Legend: Ex-Proleague", "Overwatch"],
                book: ["Novel", "Manga"],
                bookType: ["Fantasy", "Action", "Drama", "Comedy", "Romance"],
                others: ["Sleeping", "Running", "Eating", "Learning new knowledge", "Watching Anime/Movie"]
            },
            selectingContent: "General"
        }
        // this.changeContent = this.changeContent.bind(this)
        this.setContent = this.setContent.bind(this)

    }

    setContent(content) {
        this.setState({
            selectingContent: content
        })
    }

    componentDidMount(){
        this.setContent(this.state.general)
    }

    render() {
        return (
            <div className="content">
                <ul className="alpha_ul">
                    <ContentSelector content={this.state.general} selector={this.setContent} />
                    <ContentSelector content={this.state.education} selector={this.setContent} />
                    <ContentSelector content={this.state.programming} selector={this.setContent} />
                    <ContentSelector content={this.state.activity} selector={this.setContent} />
                </ul>
                <div>
                    <Content content={this.state.selectingContent} />
                </div>
            </div>
        );
    }
}

class ContentSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: this.props.content,
        }
        this.changeContent = this.changeContent.bind(this)
    }

    changeContent() {
        this.props.selector(this.props.content)
    }

    render() {
        return (
            <li className="alpha_li" onClick={this.changeContent}> {this.state.content.name} </li>
        )
    }
}


class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const content = <p>hello</p>
        const content = Object.entries(this.props.content).map(([key, value]) => {
            if (key === "name")
                return;
            if (Array.isArray(value))
                return (
                    <div>
                        <p> {key} </p>
                        <ul>{
                            Object.entries(value).map(([key, value]) => {
                                return <li>{value.toString()}</li>
                            })
                        }
                        </ul>
                    </div>
                )
            if (typeof (value) === "object")
                return (
                    <ul>{
                        Object.entries(value).map(([key, value]) => {
                            return <li>{key}: {value.toString()}</li>
                        })
                    }</ul>
                )
            return <p>{key}: {value.toString()}</p>
        })

        return (
            <div className="content_detail">
                {content}
            </div>
        )
    }

}

export default Profile;
