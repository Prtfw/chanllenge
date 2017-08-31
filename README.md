# chanllenge

cd into /review, run yarn start
cd into /server, run nodemon server.js --ignore db.json)  

(make sure you add the --ignore db.json || otherwise nodemon will continuously restart)

to test, execute npm run test in /review





Assumptions:

Lets keep things simple, get things working before we expand functionality/features

Fields required on review
score: out of 5
comments: string

a review has a target (-reviewee) and a source(-reviewer)

a employee has a name & id

reviewer and review-ees are all employees

therefore our data schema could be 
employees: id, name

reviews
id, score, commnets

review assignment (junction table)
-ee, -err, reviewId

if -ee and -er exist in review assignment table and no score/comment exists it means it’s assigned but not completed

Assigning is just a matter of adding -ee and -er to the review table 

use MongoDB or loki (fast inMem storage, on benchmark tests out performed redis and mongoDB)



API end points (route) || component 

/review/:id (of review) => one particular review
||
review for (-ee) by (-er)
score
comments

/reviews || list of review component

/assign (POST) || assignForm: list of names for people you need to review (on click any name => click add_review)

/submitReview/:id (POST) 
|| form component with:
review for (-ee/target name/display only)
score (slider)
textArea (for comments)
submit button
(not styled)

(React Route) dashboard/ => list of Review-ee & Review-er, score and comments
if not yet complete, onclick goto submitReview/:id  
(with submit button, post to API: /assign)


Backlog: 
fancy/UX features for dashboard (search/filter by names)
editing reviews
anonymous reviews
navBar for different react routes
(currently a employee can:
go to ‘/‘ for list of all reviews… assume transparency so everyone can see all other reviews
click on link to complete assigned review => goes to /new/:id react route)
(currently a admin can:
go to ‘/dashboard’ to search/select employees to review each other and check the status of these reviews)
Auth for admin and anonymous reviews if desired, or allow user to see only their reviews


Refactor Possibilities:
implement redux for state management
use GraphQL to serve data / wrap server API
refactor helper methods i.e. getReviews to Utils.js file to DRY the code
more/better styleSheet


Tech Stack:
React + Node/Express + LOKIjs(DB) + Glamorous for styling.
Decided to try LOKI after doing some benchmarking, it’s the fastest DB (in mem) so I wanted to learn it. Also it’s quick to prototype / mockup MVP. When scalability becomes a concern, it’s easy to refactor to SQL (assume good schema design) and or MongoDB
Decided to try Glamorous to implement scoped css that object oriented to have unified design/style sheet but allow each react component to have flexible but complete style by calling the ‘styleSheet’s API’ for variations such as button (submit, cancel, danger etc…) or (isActive, isDisabled etc…)… this leads to scalable css and very DRY styling.

