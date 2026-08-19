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

# struct ComponentID


 Identify a component by its type and a unique index



## Members

```cpp
public NamedType type

```

```cpp
public uuid id

```



## Functions

### ComponentID

```cpp
public void ComponentID()
```


### ComponentID

```cpp
public void ComponentID(ComponentType component_type, uuid input_id)
```


### operator!=

```cpp
public bool operator!=(const ComponentID & other)
```


### operator==

```cpp
public bool operator==(const ComponentID & other)
```


### operator<

```cpp
public bool operator<(const ComponentID & other)
```


### string

```cpp
public std::string string()
```




