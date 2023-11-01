GitHub Important Points :
-> To Initialize : git init
-> To Add files to staging area : git add . ( git add filename.extension)
-> To Make Commit : git commit -m "message"
-> To get the Id or the committed history : git log
-> To get the status : git status
-> To add a local folder/directory to the repository follow these steps :
	1) Create a empty repository
	2) copy the link of the repository 
	3) Come to gitbash the head to your folder 
	4) git remote add origin link
	5) git remote to see the fetch and merge
-> If you did the changes in the github editor the the branch of the github editor will be "origin/mater" to get the changes in our local system in simple words to direct the changes from the remote to local : git merge origin/master
-> Rather than getting in to these stuff like remote and orgin/master there is a simple way we can do that 
-> command: git pull -> pull the changes made by other to the repository to our local system
-> The git pull must done after the commit mean it has to be a clean tree

-> Cloning :
	-> git clone "link for the cloning repo" newname

-> Branch :
	-> git branch - To view the available branch and the current branch
	-> git branch -m branchname - creation of new branch
	-> git branch -d branchname - To delete the branch if the branch has merged with the master then it won't delete
	-> git branch -D branchname - It will delete the branch even though the branch had merged with the master 
	-> git checkout branchname - to switch between the branches
	-> git checkout -   - To switch to the previous branch

-> Reset :
	-> Staging Area - Used when add is performed
	-> git reset commit id - used to uncommit the commit file
	-> git reset --hard commit id - used to uncommit and delete the file
	-> git revert commit id - to uncommit changes (Try not to use the reset	
	-> git commit --amend -m "newmessage" - to altered the message of the previous commit  only previous commit

-> Stash : Used to store but without commiting 
	-> git stash - to stash
	-> git stash save name - giveing name to the stash
	-> git stash list - to view thw stashs