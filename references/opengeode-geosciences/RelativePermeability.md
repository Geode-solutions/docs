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

# class RelativePermeability


 Relative permeability law. Leaf classes must never be renamed: their type name is written in saved files.



## Functions

### RelativePermeability

```cpp
protected void RelativePermeability(std::vector<PHASE> phases)
```


### phases

```cpp
public absl::Span<const PHASE> phases()
```


 Order gives the phase index of every per-phase vector

### ~RelativePermeability

```cpp
public void ~RelativePermeability()
```


### type_name

```cpp
public std::string_view type_name()
```

### RelativePermeability

```cpp
protected void RelativePermeability()
```


### RelativePermeability

```cpp
protected void RelativePermeability(const RelativePermeability & )
```


### RelativePermeability

```cpp
protected void RelativePermeability(RelativePermeability && )
```


### operator=

```cpp
protected RelativePermeability & operator=(const RelativePermeability & )
```


### operator=

```cpp
protected RelativePermeability & operator=(RelativePermeability && )
```


### serialize

```cpp
protected void serialize(Archive & archive)
```




