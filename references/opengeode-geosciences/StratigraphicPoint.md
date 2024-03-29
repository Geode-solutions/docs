<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class StratigraphicPoint


 A Stratigraphic Point represents a point in a stratigraphic space, with an implicit field value and a point of dimension-1 giving its position in the stratigraphic space.



## Functions

### StratigraphicPoint

```cpp
public void StratigraphicPoint<>()
```


### StratigraphicPoint

```cpp
public void StratigraphicPoint<>(Point<location_dim> stratigraphic_location, double implicit_value)
```


### StratigraphicPoint

```cpp
public void StratigraphicPoint<>(const std::array<double, dimension> & values)
```


### StratigraphicPoint

```cpp
public void StratigraphicPoint<>(const Point<dimension> & stratigraphic_coordinates)
```


### stratigraphic_location

```cpp
public const Point<location_dim> & stratigraphic_location()
```


### implicit_value

```cpp
public double implicit_value()
```


### stratigraphic_coordinates

```cpp
public Point<dimension> stratigraphic_coordinates()
```


### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(Point<location_dim> stratigraphic_location)
```


### set_implicit_value

```cpp
public void set_implicit_value(double implicit_value)
```


### string

```cpp
public basic_string string()
```




