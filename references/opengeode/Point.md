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


## Members

```cpp
public static const auto dim

```



# class Point


## Members

```cpp
public static const auto dim

```



# class Point


## Members

```cpp
public static const auto dim

```



# class Point


 Description of a point in the given dimension with double coordinates



## Members

```cpp
public static const auto dim

```



## Functions

### Point

```cpp
public void Point<value-parameter-0-0>()
```


 Description of a point in the given dimension with double coordinates

### Point

```cpp
public void Point<value-parameter-0-0>(std::array<double, dimension> values)
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
public bool operator==(const Point<dimension> & other)
```


### operator!=

```cpp
public bool operator!=(const Point<dimension> & other)
```


### operator<

```cpp
public bool operator<(const Point<dimension> & other)
```


### operator<=

```cpp
public bool operator<=(const Point<dimension> & other)
```


### operator*

```cpp
public Point<dimension> operator*(double multiplier)
```


### operator/

```cpp
public Point<dimension> operator/(double divider)
```


### operator+

```cpp
public Point<dimension> operator+(const Point<dimension> & other)
```


### operator-

```cpp
public Point<dimension> operator-(const Point<dimension> & other)
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
public void operator+=(const Point<dimension> & other)
```


### operator-=

```cpp
public void operator-=(const Point<dimension> & other)
```


### inexact_equal

```cpp
public bool inexact_equal(const Point<dimension> & other)
```


### string

```cpp
public std::string string()
```


### project_point

```cpp
public Point<dimension - 1> project_point(local_index_t axis_to_remove)
```




# class Point


## Members

```cpp
public static const auto dim

```



# class Point


## Members

```cpp
public static const auto dim

```



