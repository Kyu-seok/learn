defmodule ModuleName do

  def calculateRep(list, val) do
    count = 0
    for n <- list do
      if n == val do
        count = count + 1
      end 
    end
    count
  end

  def secondLetter(inputString) do
    splitList = String.split(inputString, " ")
    IO.inspect(splitList)
    for n <- splitList do
      IO.puts(String.at n, 1)
    end

  end

end