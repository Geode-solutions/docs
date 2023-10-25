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

# class GreyscaleColor


 Description of a color in grey scale



## Functions

### GreyscaleColor

```cpp
public void GreyscaleColor()
```


### GreyscaleColor

```cpp
public void GreyscaleColor(local_index_t value)
```


### value

```cpp
public local_index_t value()
```


### set_value

```cpp
public void set_value(local_index_t greyscale)
```


### operator==

```cpp
public bool operator==(const GreyscaleColor & other)
```


### operator!=

```cpp
public bool operator!=(const GreyscaleColor & other)
```


### operator+

```cpp
public GreyscaleColor operator+(const GreyscaleColor & other)
```


### operator+=

```cpp
public void operator+=(const GreyscaleColor & other)
```


### string

```cpp
public basic_string string()
```




