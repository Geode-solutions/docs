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

# class LegacyAttributes


 Reads data model storage that older versions saved as hidden attributes, and removes these attributes once loaded.



## Functions

### deserialize

```cpp
public void deserialize(Archive & archive, std::vector<T> & storage)
```


 Read a legacy attribute and copy its values into storage.

### skip

```cpp
public void skip(Archive & archive)
```


 Read a legacy attribute whose values are not needed anymore.

### remove_from

```cpp
public void remove_from(AttributeManager & manager)
```


 Delete every attribute read so far from the given manager.



