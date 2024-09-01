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

# class Component


```cpp
Inherits from Identifier
```



# class Component


```cpp
Inherits from Identifier
```



# class Component


 This abstract class represents a component that can be used in assembly.



```cpp
Inherits from Identifier
```



## Functions

### Component

```cpp
public void Component<dimension>(const Component<dimension> & )
```


### operator=

```cpp
public Component<dimension> & operator=(const Component<dimension> & )
```


### Component

```cpp
public void Component<dimension>(Component<dimension> && other)
```


### ~Component

```cpp
public void ~Component<dimension>()
```


### component_type

```cpp
public NamedType component_type()
```

### Component

```cpp
protected void Component<dimension>()
```




