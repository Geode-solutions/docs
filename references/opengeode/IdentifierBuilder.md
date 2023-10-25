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

# class IdentifierBuilder


## Functions

### IdentifierBuilder

```cpp
public void IdentifierBuilder(Identifier & identifier)
```


### set_id

```cpp
public void set_id(const uuid & unique_id)
```


### set_name

```cpp
public void set_name(string_view name)
```


### load_identifier

```cpp
public void load_identifier(string_view directory)
```




