import './Wrapper.scss';
import { PureComponent } from "react";
class Wrapper extends PureComponent {
    state = { 
        quotes : [
            {
              "quote": "I'm not sure if I was the first man in space or the last dog.",
              "source": "-Yuri Gagarin",
              "year": "1961",
              "tags": "Humor"
            },
            {
              "quote": "'We’ll never survive!\' \'Nonsense. You’re only saying that because no one ever has.'",
              "source": "-William Goldman",
              "citation": "The Princess Bride",
              "year": "1987",
              "tags": "Inspirational"
            },
            {
              "quote": "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
              "source": "-Bill Watterson",
              "citation": "Calvin and Hobbes",
              "year": "1987",
              "tags": "Humor"
            },
            {
              "quote": "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
              "source": "-Neil Gaiman",
              "citation": "American Gods",
              "year": "2001",
              "tags": "Spirituality"
            },
            {
              "quote": "Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
              "source": "-Alexandre Dumas",
              "citation": "The Count of Monte Cristo",
              "year": "1844",
              "tags": "Humanity"
            },
            {
              "quote": "Never let your sense of morals prevent you from doing what is right.",
              "source": "-Isaac Asimov",
              "citation": "Foundation",
              "year": "1951",
              "tags": "Spirituality"
            },
            {
              "quote": "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
              "source": "-Douglas Adams",
              "citation": "Dirk Gently's Holistic Detective Agency",
              "year": "1987",
              "tags": "Inspirational"
            },
            {
              "quote": "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
              "source": "-Ayn Rand",
              "tags": "Inspirational"
            },
            {
              "quote": "I'm not dumb. I just have a command of thoroughly useless information.",
              "source": "-Bill Watterson",
              "citation": "Calvin and Hobbes",
              "year": "1987",
              "tags": "Humor"
            },
            {
              "quote": "A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
              "source": "-Jack London",
              "tags": "Humanity"
            }
        ],
        currentIndex: 0
    }

    newQuote = () => {
        let newIndex = Math.floor(Math.random() * this.state.quotes.length);
        this.setState({
            currentIndex: newIndex
        })
    }

    render() { 
        const currentQuote = this.state.quotes[this.state.currentIndex];
        return ( 
            <main>
                <div id="quote-box">
                    <div className='row'>
                        <p id="text"><blockquote>{currentQuote.quote}</blockquote></p>
                        <div id="author"><cite>{currentQuote.source}</cite></div>
                    </div>
                    <div  className='row'>
                        <a target="_blank" id="tweet-quote" className='button button--rounded' href={`https://twitter.com/intent/tweet?screen_name="${currentQuote.quote}"`}><span className='gps-button'>tweet 🐧</span></a>
                        <button onClick={this.newQuote} id="new-quote" className='button button--rounded'><span className='gps-button'>new Quote</span></button>
                    </div>
                </div>
            </main>
         );
    }
}
 
export default Wrapper;