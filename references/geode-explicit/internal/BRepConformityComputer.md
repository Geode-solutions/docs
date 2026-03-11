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

# class BRepConformityComputer


## Functions

### BRepConformityComputer

```cpp
public void BRepConformityComputer(const BRepConformityComputer & )
```


### operator=

```cpp
public BRepConformityComputer & operator=(const BRepConformityComputer & )
```


### BRepConformityComputer

```cpp
public void BRepConformityComputer(BRepConformityComputer && )
```


### operator=

```cpp
public BRepConformityComputer & operator=(BRepConformityComputer && )
```


### BRepConformityComputer

```cpp
public void BRepConformityComputer(const BRep & brep, BRepBuilder & builder, Parameters parameters)
```


### ~BRepConformityComputer

```cpp
public void ~BRepConformityComputer()
```


### process

```cpp
public MeshElements process()
```




