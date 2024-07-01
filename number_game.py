import random

def main():
  #computer selects a random number 1-10
  correct_number = random.randint(1, 10)
  print("Welcome to the number guessing game!\n------------------------------------")
  #ask user to guess a number
  user_guess = input("Guess a number 1-10: ")

  while True:
    try:
      #check if number is in 1-10
      if int(user_guess) > 10 or int(user_guess) < 1:
        user_guess = input("ERROR: Please enter a number 1-10: ")

      #if number is lower than randint
      elif int(user_guess) < correct_number:
        user_guess = input("Higher! ")

      #if number is higher than randint
      elif int(user_guess) > correct_number:
        user_guess = input("Lower! ")
        
      #when user guesses number, they win
      else:
        print("You win! Congrats!")
        break
    
    except ValueError:
      user_guess= input("ERROR: Please enter a number 1-10: ")
  
main()
