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

# class FlowModel


 Flow process of the problem. Leaf classes must never be renamed: their type name is written in saved files.



## Functions

### ~FlowModel

```cpp
public void ~FlowModel()
```


### type_name

```cpp
public std::string_view type_name()
```

### has_fluid

```cpp
public bool has_fluid()
```


### fluid

```cpp
public const FluidModel & fluid()
```


### set_fluid

```cpp
public void set_fluid(std::shared_ptr<FluidModel> fluid)
```


 The fluid is shared: do not modify it after this call

### FlowModel

```cpp
protected void FlowModel()
```


### FlowModel

```cpp
protected void FlowModel(const FlowModel & )
```


### FlowModel

```cpp
protected void FlowModel(FlowModel && )
```


### operator=

```cpp
protected FlowModel & operator=(const FlowModel & )
```


### operator=

```cpp
protected FlowModel & operator=(FlowModel && )
```


### serialize

```cpp
protected void serialize(Archive & archive)
```




