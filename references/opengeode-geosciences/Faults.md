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

# class Faults


# class Faults


## Records

FaultRangeBase

FaultRange



## Functions

### Faults

```cpp
public void Faults<>(const Faults<> & )
```


### operator=

```cpp
public Faults<> & operator=(const Faults<> & )
```


### ~Faults

```cpp
public void ~Faults<>()
```


### nb_faults

```cpp
public index_t nb_faults()
```


### has_fault

```cpp
public bool has_fault(const uuid & id)
```


### fault

```cpp
public const Fault<dimension> & fault(const uuid & id)
```


### faults

```cpp
public FaultRange faults()
```


### save_faults

```cpp
public void save_faults(string_view directory)
```


### Faults

```cpp
protected void Faults<>()
```


### Faults

```cpp
protected void Faults<>(Faults<> && )
```


### operator=

```cpp
protected Faults<> & operator=(Faults<> && other)
```




# class Faults


