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

# class Vector


 Description of a vector in the given dimension with double coordinates



```cpp
Inherits from Point<dimension>
```



## Functions

### Vector

```cpp
public void Vector<>()
```


### Vector

```cpp
public void Vector<>(const Point<dimension> & vector)
```


### Vector

```cpp
public void Vector<>(std::array<double, dimension> values)
```


### Vector

```cpp
public void Vector<>(const Point<dimension> & from, const Point<dimension> & to)
```


### length2

```cpp
public double length2()
```


### length

```cpp
public double length()
```


### operator*

```cpp
public Vector operator*(double multiplier)
```


### operator/

```cpp
public Vector operator/(double divider)
```


### operator+

```cpp
public Vector operator+(const Vector<> & other)
```


### operator-

```cpp
public Vector operator-(const Vector<> & other)
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
public void operator+=(const Vector<> & other)
```


### operator-=

```cpp
public void operator-=(const Vector<> & other)
```


### normalize

```cpp
public Vector normalize()
```


### dot

```cpp
public double dot(const Vector<> & other)
```


### cross

```cpp
public Vector cross(const Vector<> & other)
```




