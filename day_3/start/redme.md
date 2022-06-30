##generate ssh key
ssh-keygen -t ed25519 -C "phuyalrn2@gmail.com"
##start ssh agent
eval "$(ssh-agent -s)"
##add ssh key
ssh-add /home/aryan/.ssh/reactclass
##add private key
##github document
me says:
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
