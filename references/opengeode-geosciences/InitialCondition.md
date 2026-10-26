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

# class InitialCondition


 Initial state of model regions. Leaf classes must never be renamed: their type name is written in saved files.



## Functions

### InitialCondition

```cpp
protected void InitialCondition(std::vector<uuid> regions)
```


### regions

```cpp
public absl::Span<const uuid> regions()
```


 Model components or collections. Empty means every region without another initial condition.

### ~InitialCondition

```cpp
public void ~InitialCondition()
```


### type_name

```cpp
public std::string_view type_name()
```

### InitialCondition

```cpp
protected void InitialCondition()
```


### InitialCondition

```cpp
protected void InitialCondition(const InitialCondition & )
```


### InitialCondition

```cpp
protected void InitialCondition(InitialCondition && )
```


### operator=

```cpp
protected InitialCondition & operator=(const InitialCondition & )
```


### operator=

```cpp
protected InitialCondition & operator=(InitialCondition && )
```


### serialize

```cpp
protected void serialize(Archive & archive)
```




