---
layout: portfolio_item
headtouse: headcontent.html
title: Social newsreader - ux/ui
sub: 
---

# The Challenge


<div class="small_container">

The inspiration for this project came from user research I did for a related project: designing a Korean tech news aggregator. In talking to my friends about their online news reading habits, I learned that millennials are relying on Facebook as their primary news source i.e., they like to read articles that Facebook friends post. However, the Newsfeed is noisy and cluttered. I feel that I have to filter through my Newsfeed to find gems like article posts. So I created a product concept where users can read the articles their Facebook friends posted distraction-free. The product achieves this by 1) pulling articles posted by users’ Facebook friends 2) parsing the articles and presenting them in a clean format. 

<br>
<br> 
</div>


# User Needs 


<div class="small_container">
	<a class="hyperlink" href="http://www.journalism.org/2015/06/01/facebook-top-source-for-political-news-among-millennials/">A Pew study</a> confirms that Facebook is by far the top news source for political news among millennials. I think millennials like to read posts Facebook friends shared because first, they come from trustworthy sources, i.e., my intelligent friends and second, the discussions that happen in the comments section are often interesting. 
	<br> 
<br>
	<p class="italic">“Sometimes I’m more interested in reading the news than personal updates”</p> 

	<br>

	However, the Newsfeed is often filled with content you are not interested in consuming. As my friend commented, “Sometimes I’m more interested in reading the news than personal updates,” users sometimes want their Newsfeed experience to be simplified. The product fulfills such user needs by presenting only what they are looking for.   
	 <br> 
	 <br> 
	In addition, people do not always check Facebook and as a result, they sometimes miss articles. The product allows people to read news that they would otherwise have missed. 

	<br>
	<br>
 
# Design Goal: To Deliver a Great Reading Experience  
<br> 
<br> 
	One key design goal I had in mind was to deliver a great reading experience. I think web-based news readers can do a better job at delivering a pleasant reading experience. 


	For example, Feedly, one of the most popular RSS readers, offers only a preview of an article. To read the whole article, users have to first click the news item on their feed on Feedly and then click either the "Read Full Story" link or title. It'd be nice if users could view the whole article with just one click instead. 

	<br>
</div>




<div style="text-align: center;"><img src="/images/feedly.png" width="800" /></div> 
<div style="text-align: center;"><div class="feedlycaption">Feedly offers only a preview of an article</div></div>


<div class="small_container">
	<br>
	On Flipboard, another popular newsreader, users are instead directed straight to the original site when they click the news item. However, the web is often less ideal for reading. Large ads, bad layouts, and other features on news sites can distract you from reading. I think the popularity of products such as Readability, Pocket, Instapaper, and Medium really speaks to the idea that users value distraction-free reading experience. Given this insight, I think a news reader that also parses articles and presents them in a clean format will offer extra value to users. This way, users can enjoy a great reading experience without having to leave the site. 

	<br>
	<br> 
</div>



# Design Details


<div class="small_container">
	For the interface, I wanted to have as few elements as possible so that the product offers a distraction-free reading experience.  

	For example, I think the pictures that news readers pull up for each article are often irrelevant to the articles.  
</div>




<div style="text-align: center;"><img src="/images/pictures.png" /></div>
<div class="feedlycaption"><p style="text-align: center;">Pictures don't always make sense</p> </div>


<div class="small_container">

So I decided not to pull up photos for each news item and present only the essentials. 

In addition, I wanted to have elements that help users share or manage articles appear only when needed. I considered three ways in which I can achieve this: 1) the share/manage menu appears in default either on top or the left side and users click to collapse or expand it. 2) the menu appears when users scroll up as they read an article; the menu disappears when users scroll down. 3) same as 2) but in addition to that, there is a button and the menu appears when a user hovers over the button. 
</div>

  


<div style="text-align: center;"><img src="/images/option3.jpg" width="800" style="transform: rotate(90deg);-webkit-transform: rotate(90deg);"> </div> 

<div class="small_container">
	I decided against 1) because I wanted the full screen dedicated to the article without the menu.  Between 2) and 3), I initially chose 3) because it will not always be intuitive to users that the share/manage menu will appear when they scroll up. For users who want to use the share/manage menu but have not yet figured out that the menu appears when they scroll up, the button will give them more control. In designing option 3) I decided to place the button and menu on the bottom of the screen because eyes stay on the upper part of the screen and it will be less distracting to have the menu appear on the bottom. 
	However, once I designed the high-fidelity mockup of 3), I realized that it’s a bit distracting to have a button on the bottom. 
</div>
<br>



<div style="text-align: center;"><img src="/images/bottombutton.png" style="box-shadow: 0px 8px 15px #eaeaea"></div>

<div class="small_container">

<br>

<p>In option 3), when users hover over the button, the share/manage menu appears.</p>
<br>
</div>


<div style="text-align: center;"><img src="/images/bottombutton2.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 

<div class="small_container">

<br>
 I decided creating a distraction-free experience is more important than giving users a bit more control over managing articles, so I went with 2) instead.  
</div>
 


<div style="text-align: center;"><img src="/images/bottombar.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 

<div class="small_container">
	<p class="cap">In the final design, the share/manage menu appears when users scroll up.</p>
	<br>
</div>

# Iterations 


<div class="small_container">
	After designing high-fidelity mockups, I shared an InVision prototype with potential users. One useful insight I gained while talking to users was that they are not just interested in who shares the article but how many people are sharing the article. This makes sense because the more widely an article is shared, the more likely it is interesting.  

	In my original design, the product sorts the list by most recent. 
</div>






<div style="text-align: center;"><img src="/images/originaldesign.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 


<div class="small_container">


<p class="mostrecent"><p style="text-align: center";>The original design sorts the article list by most recent.</p>
<br>

However, users will appreciate being able to sort the article list by most shares. So I decided to give users options to sort the list by a) most recent b) most shares c) a combination of a ) and b). 

I thought c) made sense and made it as the default option. In this option, articles that were shared the most - but relatively recently - appear on top of the list, then the list sorts the list by most recent. For example, an article that was shared by many but shared a long time ago will not make it to the top of the list. Here's the new article list page. 

<br>
</div>




<div style="text-align: center;"><img src="/images/maindropdown.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 


<div class="small_container">
	There were other useful insights I gained while talking to users. For example, some wanted to be able to sort the list by topics e.g. politics. However, the goal of the product is to simplify the Newsfeed experience after all, and I decided not to add more bells and whistles.

	<br>
	<br> 

<br> 

# Final Design 

<br> 
	A user logs in. 
</div>






<div style="text-align: center;"><img src="/images/main.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 

<div class="small_container">
	S/he sees the list of articles that his/her Facebook friends posted. 
</div>


<div style="text-align: center;"><img src="/images/maindropdown2.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 

<div class="small_container">
	S/he reads an article distraction-free. The site also pulls comments from Facebook, which s/he can choose to hide.  
</div>



<div style="text-align: center;"><img src="/images/articlepage.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 

<div class="small_container">
	S/he can also view the list of articles posted by a specific friend.
</div>




<div style="text-align: center;"><img src="/images/sharedbydianna.png" style="box-shadow: 0px 8px 15px #eaeaea"></div> 

<br> 
<br>

# What I would've done differently 

<div class="small_container">
	I would’ve liked to do more rigorous user testing to validate design decisions. For example, the favorite button appears at the end of the article now. Should it appear on top as well? What would A/B testing results indicate?  

In addition, I recognize ​that it may be a challenge technically and legally to implement the product concept. I would've liked to look into relevant areas further to validate the product concept.   ​
</div>




