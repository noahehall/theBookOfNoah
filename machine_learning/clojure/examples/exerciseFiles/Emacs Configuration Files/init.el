(set-face-attribute 'default nil :height 250)
(require 'package)
(package-initialize)

(add-to-list 'package-archives '("melpa" . "http://melpa.milkbox.net/packages/") t)
(add-to-list 'package-archives '("marmalade" . "http://marmalade-repo.org/packages/") t)

(when (not package-archive-contents)
  (package-refresh-contents))

(unless (package-installed-p 'use-package)
  (package-refresh-contents)
  (package-install 'use-package))

(eval-when-compile
  (require 'use-package))

(use-package cider
	     :ensure t)

(use-package cider-spy
	     :ensure t)

(use-package color-theme
  :ensure t)

(use-package paredit
	     :ensure t)

(use-package idle-highlight-mode
  :ensure t)

(use-package find-file-in-project
  :ensure t)

(use-package smex
  :ensure t)

(use-package ido-ubiquitous
	     :ensure t)

(use-package idle-highlight-mode
  :ensure t)

(use-package find-file-in-project
  :ensure t)

(use-package smex
  :ensure t)

(use-package ido-ubiquitous
	     :ensure t)

(use-package idle-highlight-mode
  :ensure t)

(use-package find-file-in-project
  :ensure t)

(use-package smex
  :ensure t)

(use-package ido-ubiquitous
  :ensure t)

(use-package rainbow-delimiters
  :ensure t)

(use-package ace-jump-mode
	     :ensure t)

(use-package projectile
  :ensure t
  :config
  (diminish 'projectile-mode))

;; (use-package zenburn-theme  ;; our chosen theme name here
;; 	     :ensure t)

(use-package yasnippet
  :ensure t
  :config
  (yas-global-mode 1)
  (add-hook 'prog-mode-hook #'yas-minor-mode)
  (diminish 'yas-minor-mode))

(use-package clojure-mode
  :ensure t
  :config
  (yas-global-mode 1))

(require 'diminish)
(require 'bind-key)

(use-package cider
  :ensure t
  :config
  (add-hook 'cider-repl-mode-hook 'rainbow-delimiters-mode)
  (add-hook 'prog-mode-hook 'rainbow-delimiters-mode)
  (add-hook 'emacs-lisp-mode-hook 'rainbow-delimiters-mode)
  (add-hook 'prog-mode-hook 'rainbow-delimiters-mode)
  (add-hook 'cider-mode-hook 'cider-turn-on-eldoc-mode)
  (add-hook 'cider-repl-mode-hook 'cider-turn-on-eldoc-mode)
  (add-hook 'cider-mode-hook 'linum-mode))

(use-package cider-eldoc
  :config
  (setq nrepl-hide-special-buffers t)
  (setq cider-auto-select-error-buffer t)
  (setq cider-repl-display-in-current-window nil)
  (setq cider-repl-print-length 100)
  (setq cider-prompt-for-symbol nil)
  (diminish 'eldoc-mode))

(use-package clj-refactor
  :ensure t
  :config
  (add-hook 'cider-mode-hook
            (lambda ()
              (clj-refactor-mode 1)
              ;(cljr-add-keybindings-with-prefix "C-c C-m")
              (define-key cider-mode-map (kbd "C-c C-m") 'hydra-cljr-help-menu/body))))

(use-package paredit
  :ensure t
  :config
  (define-key paredit-mode-map (kbd "C-M-]") 'paredit-forward-barf-sexp)
  (define-key paredit-mode-map (kbd "C-M-[") 'paredit-backward-barf-sexp)
  (define-key paredit-mode-map (kbd "M-]") 'paredit-forward-slurp-sexp)
  (define-key paredit-mode-map (kbd "M-[") 'paredit-backward-slurp-sexp)
  (add-hook 'cider-repl-mode-hook 'paredit-mode)
  (add-hook 'emacs-lisp-mode-hook 'paredit-mode)
  (add-hook 'clojure-mode-hook 'paredit-mode)
  (add-hook 'nrepl-mode-hook 'paredit-mode))

(setq global-hl-line-mode t)

(setenv "PATH" (concat (getenv "PATH") ":/usr/local/bin"))
(setq exec-path (append exec-path '("/usr/local/bin")))
