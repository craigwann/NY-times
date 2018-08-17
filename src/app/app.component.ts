import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  date: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  day: number = this.currentTime.getDay();

  selectedArticle = null;

  masterArticleList: Article[] = [
    new Article('Trump Cancels Military Parade, Blaming Washington Officials for Inflating Costs', 'WASHINGTON — President Trump on Friday canceled plans for a military parade this fall in Washington, blaming local officials for inflating the costs and saying they “know a windfall when they see it. Washington’s mayor, Muriel Bowser, pushed back on Twitter, saying that she had “finally got thru” to the president to convey the “realities” of what it costs to stage events like military parades in the city.  She put the number at $21.6 million, though the city’s costs are just a fraction of the total, with federal agencies also kicking in millions of dollars. A day earlier, the Pentagon said Mr. Trump’s parade to celebrate the military could be postponed to 2019, as officials acknowledged that the event could cost more than $90 million.', 'trump.jpg'),

    new Article('The Secret to Ant Efficiency Is Idleness', 'Ants are renowned for their industriousness. Ask the grasshopper in the story by Aesop. He had to come begging the hard-working ant for food when winter came because he had frittered away his summer. But that is fable, the ultimate in what scientists call anecdotal evidence. And new research at Georgia Tech suggests that although ant colonies are very efficient, that may be because 70 percent of them are doing very little — at least when it comes to tunnel digging. Daniel I. Goldman, a physicist at the Georgia Institute of Technology, and his colleagues, found that the secret to efficient tunnel digging by fire ants was that 30 percent of the ants did 70 percent of the work. They reported their fable-shaking finding in the journal Science. The reason, it seems, is that the ants were working in narrow tunnels where traffic jams could easily clog up the entire effort to build nests. So it helped if some of them took a pileup in the tunnel as a signal to suggest that they take a break.', 'ant.jpg'),

    new Article('Dale Earnhardt Jr. Returns to the Racetrack and an Old Hobby', 'WATKINS GLEN, N.Y. — When Dale Earnhardt Jr. was growing up, fewer Nascar races were televised than they are now. So he would tune his radio to listen to famous announcers like Barney Hall and Ken Squier call the action of his father’s races on the Motor Racing Network. Hall and Squier made a lasting impression. Every time Earnhardt gathered with friends to simulate Nascar races with their Matchbox cars at his house, he was often not as interested in winning as he was in announcing.“To me, that was as much fun as racing those Matchbox cars when I was a little boy,” a smiling Earnhardt said recently. After driving at the top level of the sport full time for 18 years, Earnhardt, 43, embarked last month on a much-publicized second career as an analyst on Nascar races for NBC Sports. He wants to make it clear that he is not just along for the ride.', 'dale.jpg'),

    new Article('Aretha Franklin Dies at 76', 'Aretha Franklin, universally acclaimed as the “Queen of Soul” and one of America’s greatest singers in any style, died on Thursday at her home in Detroit. She was 76.The cause was advanced pancreatic cancer, her publicist, Gwendolyn Quinn, said. In her indelible late-1960s hits, Ms. Franklin brought the righteous fervor of gospel music to secular songs that were about much more than romance. Hits like “Do Right Woman — Do Right Man,” “Think,” “(You Make Me Feel Like) A Natural Woman” and “Chain of Fools” defined a modern female archetype: sensual and strong, long-suffering but ultimately indomitable, loving but not to be taken for granted. When Ms. Franklin sang “Respect,” the Otis Redding song that became her signature, it was never just about how a woman wanted to be greeted by a spouse coming home from work. It was a demand for equality and freedom and a harbinger of feminism, carried by a voice that would accept nothing less..', 'aretha.jpg')
  ]

}
