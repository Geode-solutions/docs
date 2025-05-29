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

# class Angle


## Functions

### create_from_radians

```cpp
public Angle create_from_radians(double radians)
```


### create_from_degrees

```cpp
public Angle create_from_degrees(double degrees)
```


### radians

```cpp
public double radians()
```


### degrees

```cpp
public double degrees()
```


### sin

```cpp
public double sin()
```


### cos

```cpp
public double cos()
```


### tan

```cpp
public double tan()
```


### inexact_equal

```cpp
public bool inexact_equal(const Angle & other)
```


### operator==

```cpp
public bool operator==(const Angle & other)
```


### operator<

```cpp
public bool operator<(const Angle & other)
```


### operator>

```cpp
public bool operator>(const Angle & other)
```


### operator+

```cpp
public Angle operator+(const Angle & other)
```


### operator-

```cpp
public Angle operator-(const Angle & other)
```


### operator*

```cpp
public Angle operator*(double scalar)
```


### operator/

```cpp
public Angle operator/(double scalar)
```


### normalized_between_0_and_2pi

```cpp
public Angle normalized_between_0_and_2pi()
```


### normalized_between_minuspi_and_pi

```cpp
public Angle normalized_between_minuspi_and_pi()
```


### normalized_between_0_and_pi

```cpp
public Angle normalized_between_0_and_pi()
```




