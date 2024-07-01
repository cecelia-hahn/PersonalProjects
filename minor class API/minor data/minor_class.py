class Minor():
  def __init__(self, first_name, last_name, email):
    self.__first_name = first_name
    self.__last_name = last_name
    self.__email = email

  #get and set methods
  def get_first_name(self):
    return self.__first_name
  def set_first_name(self, new_fname):
    self.__first_name = new_fname

  def get_last_name(self):
    return self.__last_name
  def set_last_name(self, new_lname):
    self.__last_name = new_lname

  def get_email(self):
    return self.__email
  def set_email(self, new_email):
    self.__email = new_email

  #print info
  def print_info(self):
    
