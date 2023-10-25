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

# class ModelMapping


## Functions

### ModelMapping

```cpp
public void ModelMapping<MappingType>(const ModelMapping<MappingType> & )
```


### operator=

```cpp
public ModelMapping<MappingType> & operator=(const ModelMapping<MappingType> & )
```


### ModelMapping

```cpp
public void ModelMapping<MappingType>()
```


### ModelMapping

```cpp
public void ModelMapping<MappingType>(ModelMapping<MappingType> && other)
```


### operator=

```cpp
public ModelMapping<MappingType> & operator=(ModelMapping<MappingType> && other)
```


### at

```cpp
public MappingType & at(const ComponentType & type)
```


### at

```cpp
public const MappingType & at(const ComponentType & type)
```


### has_mapping_type

```cpp
public bool has_mapping_type(const ComponentType & type)
```


### emplace

```cpp
public void emplace(const ComponentType & type, MappingType mapping)
```


### remove

```cpp
public void remove(const ComponentType & type)
```


### operator[]

```cpp
public MappingType & operator[](const ComponentType & type)
```




