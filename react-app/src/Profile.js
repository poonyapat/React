import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            general: {
                type: "general",
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
                type: "education",
                primarySchool: "Bangkok Christian College",
                secondarySchool: "Bangkok Christian College",
                bachelorsDegree: {
                    university: "Kasetsart Univsersity",
                    faculty: "Science",
                    department: "Computer Science"
                }
            },
            programming: {
                type: "programming",
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
                type: "activity",
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
            selectingContent: content.type
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <ContentSelector content={this.state.general} selector={this.setContent} />
                    <ContentSelector content={this.state.education} selector={this.setContent} />
                    <ContentSelector content={this.state.programming} selector={this.setContent} />
                    <ContentSelector content={this.state.activity} selector={this.setContent} />
                </ul>
                <div>
                    {this.state.selectingContent}
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
            <li onClick={this.changeContent}> {this.state.content.type} </li>
        )
    }
}

export default Profile;
