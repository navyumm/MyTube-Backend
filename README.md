# steps to work on this :
-------------------------------
<!-- I want to take on another level -->

1) package.json file banao
    -> npm init

2) git me upload karenge
    -> git init

____________

ab maan lo hume koi image vgra upload karni hai to use hum to usko hum tempraroly apne server par rakhte hai
kyoki maan lo kbhi server(AWS, AZURE) ka connection fail ho to images hmari store ho

to iske liye hum ek folder bnayenge public naam server

-> Public -> temp ->  git status -> .gitkeep

<!--  -->

.gitignore 
-> jo file hume git par upload nhi karni usai is file me daalte hai

# we have git ignore generator 

<!-- -->

# .env file bnayenge :
# ab src folder bnayenge : directories files ke liye
# aur uske ye 3 files banao 
    -> app.js constants.js index.js

____________________



# ab import waale tarike se kaam karne ke liye 
package.json me ye add karo -> "type":"module",

# ab nodemon install karo 
    -> npm i -D nodemon

# ab package.json me script me ye add karo
    -> "dev": "nodemon src/index.js"   

-------------------

# ab mujhe kuch folders bhi chahiye src ke andr 
 -> aur aage chalkar hmare kaam aayenge production me

-> controllers : yaha par hmari hogi major functionality
-> db : database connect kaise karna hai 
-> middlewares : code in between 
-> modules
-> routes : alg alg sbhi route ko manage karne ke liye 
-> utils : utilities me hmari vo file aati hai jo functionality baar baar repeat hoti hai 

---------------------

# Now install prettier from npm
-> because of hum code team me likhenge, ab koi kaisa code likh rha hai koi kaisa, to waha prettier add karna imp hai
    npm i -D prettier

-> install karne ke baad ye 2 files banao

.prettierrc -> sbhi jagah apply karne ke liye 
.prettierignore -> idhr apply nhi karna vo

------------------------


# DB connection karenge ab hum 

.env -> me PORT or variables set karo

fir db ka naam constants file me likhna hai 

------------------------

# db connection mainly 2 tarike se ho sakta hai 

1) sara code index.js me likho -> aur usko execute karwado
2) db naam ka koi folder banau isme connection jo bhi fuction hai vo likhuaur fir index file mein function ko import karwau aur waha execute karwau


-----------------------

# ab db connection akrte hai 

1) install dotenv, mongoose, and express 
    npm i mongoose express dotenv

2) point to me notice    
    -> jab bhi db se baat karo try and catch appoarch jarur lagao with async await

3) ab index.js file me jaakr code likhe hai    

-------------------------
 # ab 2nd appoarch

 -> bd ke andr -> index.js
 -> dotenv ko require karo

<!--  -->

express me hum:
ab 2 chijen install kari hai 

1) cookie-parser
2) cors -> ye hum setting karne deta hai croos origin resorce share ke liye
----------------

abhi tak bss hmari setting chal rhi hai ki
kaise kaise data aa sakta hai


-> middlewares

-> nodejs api error


------------------------------------------------


# user model & video model
# JWT
# Decript 

ab models folder ke andr kaam karenge

ab user model me jo video id aagyi vo model ko complex bna deta hai 
uske liye mongodb querry lagegi originek package ka use karenge
jo hai : 

-> npm i mongoose-aggregate-paginate-v2


# bcrypt  -> ye hash password ke liye hai, matlab password jab encrypt honge toh decrypt bhi honge, joki issai hote hai
-> npm i bcrypt

# Jsonwebtoken -> jwt.io
-> npm i jsonwebtoken

-----
ab user file me inko export karo jaakr


-----
ab direct encrypt karna possible hai nhi, to hume help leni padhti hai mongoose ke kuch hooks ki
middlewares me kuch hooks hai 
-> Pre hook

<!-- ---------------------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------------------- -->

# how to do file upload

-> third part servicex 
like: AWS, AZURE and many more

# hum cloudinary use karenge 
-> npm install cloudinary

# multer
-> npm i multer

---> file ko direct cloudinary me store nhi karwa sakte uske liye multer ki zarurat pdegegi


# ab multer par kuch steps hai?

1) user se file leta hai -> local storage me temporary store karna
2) local storage se cloudinary ko file dena

uske baad cloudinary file ko server par daalta hai


--
ab hum utils me ek cloudinary naam se ek file bnate hai 

-------------------------------------------------------------------------------------------------

HHTP : 
    -> URL -> universe resorce locator
    -> URI -> 
    -> URN

what are HHTP headers?
    metadata  -->  key-value    sent along with request & response

    -> caching, authentication, manage state
        X-prefix  ->  2012 (X-deprecated)      


* Request headers  -->  from client
* Response Headers  -->  from server
* Representation Headers  -->  encoding/ compression
* Payload Headers  -->  data




# Most common Headers 
* Accept : application/ json
* User - Agent
* Authorization : Beerer
* Content - Type : images/video
* Cookie : login vgra
* Cache - Control : expire


# CORS
* Acces - Control - Allow - Origin
* Acces - Control - Allow - Credentials
* Acces - Control - Allow - Method


# Security
* Cross - Origin - Embedders - Policy
* Cross - Origin - Opener - Policy
* Content - Security - Policy
* X - XSS - Protection

<!-- --------------------------------------------------------------- -->


## HHTP Methods

Basic set of operations that can be used to interact with server 

* <GET>      :   retrieve a resource 
* <HEAD>     :   No message body ( Response headers only)
* <OPTIONS>  :   what operations are available 
* <TRACE>    :   loopback test ( get some data ) -> proxy
* <DELETE>   :   remove a resource
* <PUT>      :   replace a resource
* <POST>     :   intresct with Response ( mostly add )
* <PATCH>    :   change part of a resource


<!-- ---------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->


## HTTP Status Code

* 1 xx      Informational     ->  xx ki jagh koi bhi no. aayega like : 112
* 2 xx      Success
* 3 xx      Redirection
* 4 xx      Client error
* 5 xx      Server error

------------------------------


* 100   ->   Continue
* 102   ->   Processing
* 200   ->   Ok
* 201   ->   Created
* 202   ->   Accepted
* 307   ->   temporary redirect 
* 308   ->   permanent redirect
* 400   ->   Bad request
* 401   ->   Unauthoorized
* 402   ->   Payment reqired
* 404   ->   Not Found
* 500   ->   Internal Server error
* 504   ->   Gateway time Out

<!-- ---------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->




### Ab Controllers par kaam karenge 

<!-- ---------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->



# register user ke steps

<li> username
<li> email
<li> password
<li> captcha







