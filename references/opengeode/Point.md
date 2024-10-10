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

# class Point


 Description of a point in the given dimension with double coordinates



## Functions

### Point

```cpp
public void Point<>()
```


### Point

```cpp
public void Point<>(std::array<double, dimension> values)
```


### value

```cpp
public double value(local_index_t index)
```


### set_value

```cpp
public void set_value(local_index_t index, double coordinate)
```


### operator==

```cpp
public bool operator==(const Point<> & other)
```


### operator!=

```cpp
public bool operator!=(const Point<> & other)
```


### operator<

```cpp
public bool operator<(const Point<> & other)
```


### operator<=

```cpp
public bool operator<=(const Point<> & other)
```


### operator*

```cpp
public Point operator*(double multiplier)
```


### operator/

```cpp
public Point operator/(double divider)
```


### operator+

```cpp
public Point operator+(const Point<> & other)
```


### operator-

```cpp
public Point operator-(const Point<> & other)
```


### operator*=

```cpp
public void operator*=(double multiplier)
```


### operator/=

```cpp
public void operator/=(double divider)
```


### operator+=

```cpp
public void operator+=(const Point<> & other)
```


### operator-=

```cpp
public void operator-=(const Point<> & other)
```


### inexact_equal

```cpp
public bool inexact_equal(const Point<> & other)
```


### string

```cpp
public basic_string string()
```


### project_point

```cpp
public Point<dimension - 1> project_point(geode::local_index_t axis_to_remove)
```




