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

# class RGBColor


## Functions

### RGBColor

```cpp
public void RGBColor()
```


### RGBColor

```cpp
public void RGBColor(local_index_t red, local_index_t green, local_index_t blue)
```


### red

```cpp
public local_index_t red()
```


### green

```cpp
public local_index_t green()
```


### blue

```cpp
public local_index_t blue()
```


### set_red

```cpp
public void set_red(local_index_t red_scale)
```


### set_green

```cpp
public void set_green(local_index_t green_scale)
```


### set_blue

```cpp
public void set_blue(local_index_t blue_scale)
```


### operator==

```cpp
public bool operator==(const RGBColor & other)
```


### operator!=

```cpp
public bool operator!=(const RGBColor & other)
```


### operator+

```cpp
public RGBColor operator+(const RGBColor & other)
```


### operator+=

```cpp
public void operator+=(const RGBColor & other)
```


### string

```cpp
public basic_string string()
```




