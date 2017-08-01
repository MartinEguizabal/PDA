@cars = {
  sportscars: {
    ferrari: 100000
    }, 
  vans: {
    VW_van: 2000},
  trucks: {
    Ford_F1: 5000,
    Chevy_57: 7000
    }
  }

def get_trucks_cost
  total = 0

  @cars[:trucks].each_value{|value| total += value}
  p total
end

get_trucks_cost