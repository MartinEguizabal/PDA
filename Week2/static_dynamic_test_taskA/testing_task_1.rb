### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val 
  if val = 1
  return true
  else
  return false
  end
end

# The above should have brackets around the parameter 'val'. There needs to be another '=' in the second line. The two 'return's should be indented. 
  
dif max a b
  if a > b
      return a 
  else
  b
  end 
end 
end 

# The above should have brackets around 'a' and 'b'. 'a' and 'b' require a ',' between them. 'dif' is a mispelling of 'def'. The last 'b' should have a return in front of it. 'return a' and the correct 'return b' should be properly indented. The last 'end' needs to be removed. 


  
def looper 
  for i in 1..10
  puts i
  end
end

# The above will simply return 1 to 10 given the way it is written. 'puts' should be indented. 


 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1

# In the above function, although it can successfully call looper as it is written it should call it like so: 'looper()'. Also when looper is called it will simply puts the result (i) and has not been written to return it. So as written the above if statement will always puts 'looper failed'. Additionally, the if statement needs an 'end'.
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

# In the above the 'else' should read 'puts "max(100,1) failed"'. 'failrues' should read 'failures'

  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end

# Although 'if failures' will correctly puts "Test Failed", because the variable "failures" exists, it appears the intention of the function is to test whether there are any number of failures (ie: that the variable failures = 1 or more). To fix this a condition might be added so it reads 'if failures > 0'


