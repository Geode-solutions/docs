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

# namespace detail



## Records

* [ComponentsTypesMapping](ComponentsTypesMapping.md)


## Functions

### add_mapping

```cpp
void add_mapping(ModelCopyMapping & temp2output, const ModelCopyMapping & input2temp, const ModelCopyMapping & input2output, const ComponentType & component_type)
```


### create_mapping

```cpp
void create_mapping(ModelCopyMapping & temp2output, const ModelCopyMapping & input2temp, const ModelCopyMapping & input2output)
```


### create_mapping

```cpp
void create_mapping(ModelCopyMapping & temp2output, const ModelCopyMapping & input2temp, const ModelCopyMapping & input2output)
```


### create_transfer_mapping

```cpp
ModelMapping create_transfer_mapping(const ModelCopyMapping & input2temp, const ModelCopyMapping & input2output)
```




