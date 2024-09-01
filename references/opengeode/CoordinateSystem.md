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

# class CoordinateSystem


```cpp
Inherits from Frame<dimension>
```



## Functions

### CoordinateSystem

```cpp
public void CoordinateSystem<>()
```


### CoordinateSystem

```cpp
public void CoordinateSystem<>(std::array<Vector<dimension>, dimension> directions, Point<dimension> origin)
```


### CoordinateSystem

```cpp
public void CoordinateSystem<>(Point<dimension> origin, const std::array<Point<dimension>, dimension> & other_points)
```


### origin

```cpp
public const Point<dimension> & origin()
```


### set_origin

```cpp
public void set_origin(Point<dimension> origin)
```


### set_directions

```cpp
public void set_directions(std::array<Vector<dimension>, dimension> directions)
```


### coordinates

```cpp
public Point<dimension> coordinates(const Point<dimension> & global_coordinates)
```


### global_coordinates

```cpp
public Point<dimension> global_coordinates(const Point<dimension> & coordinates)
```


### string

```cpp
public basic_string string()
```




# class CoordinateSystem


```cpp
Inherits from Frame<2U>
```



# class CoordinateSystem


```cpp
Inherits from Frame<3U>
```



