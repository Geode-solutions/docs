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

# class BitseryExtensions


## Functions

### register_functions

```cpp
public void register_functions(RegisterFunction serializer, RegisterFunction deserializer)
```


### register_serialize_pcontext

```cpp
public void register_serialize_pcontext(PContext & context)
```


### register_deserialize_pcontext

```cpp
public void register_deserialize_pcontext(PContext & context)
```




