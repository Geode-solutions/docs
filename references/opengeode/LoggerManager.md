# class LoggerManager


## Functions

### ~LoggerManager

```cpp
public void ~LoggerManager()
```


### register_client

```cpp
public void register_client(std::unique_ptr<LoggerClient> && client)
```


### trace

```cpp
public void trace(const std::string & message)
```


### debug

```cpp
public void debug(const std::string & message)
```


### info

```cpp
public void info(const std::string & message)
```


### warn

```cpp
public void warn(const std::string & message)
```


### error

```cpp
public void error(const std::string & message)
```


### critical

```cpp
public void critical(const std::string & message)
```




