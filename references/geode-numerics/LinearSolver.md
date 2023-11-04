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

# class LinearSolver


## Records

Coefficient

Impl



## Functions

### LinearSolver

```cpp
public void LinearSolver(const LinearSolver & )
```


### operator=

```cpp
public LinearSolver & operator=(const LinearSolver & )
```


### LinearSolver

```cpp
public void LinearSolver(LinearSolver && )
```


### operator=

```cpp
public LinearSolver & operator=(LinearSolver && )
```


### LinearSolver

```cpp
public void LinearSolver(index_t nb_variables)
```


### ~LinearSolver

```cpp
public void ~LinearSolver()
```


### nb_variables

```cpp
public index_t nb_variables()
```


### variable

```cpp
public double variable(index_t variable)
```


### set_variable

```cpp
public void set_variable(index_t variable, double value)
```


### lock_variable

```cpp
public void lock_variable(index_t variable)
```


### is_variable_locked

```cpp
public bool is_variable_locked(index_t variable)
```


### create_system

```cpp
public void create_system(index_t nb_rows)
```


### add_coefficient

```cpp
public void add_coefficient(const Coefficient & coefficient)
```


### add_rhs

```cpp
public void add_rhs(index_t variable, double value)
```


### solve

```cpp
public void solve()
```




