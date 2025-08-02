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

# class Percentage


## Functions

### Percentage

```cpp
public void Percentage(double value)
```


### value

```cpp
public double value()
```


### set_value

```cpp
public void set_value(double value)
```


### string

```cpp
public basic_string string()
```




