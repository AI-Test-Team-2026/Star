-- SQLite Schema for Star Application
-- This schema matches the MySQL tables created by the application
-- Designed for offline operation when MySQL is not available

-- Enable foreign keys
PRAGMA foreign_keys = ON;

-- Projects table
CREATE TABLE IF NOT EXISTS pa5478_projects (
    project_id INTEGER PRIMARY KEY AUTOINCREMENT,
    panel_name VARCHAR(255) NOT NULL UNIQUE,
    ic_ver VARCHAR(255) NOT NULL,
    panel_ver INTEGER NOT NULL,
    type VARCHAR(2) NOT NULL,
    cascade_ic_num INTEGER NOT NULL,
    aa_size_horizontal REAL,
    aa_size_vertical REAL,
    ic_power_mode INTEGER,
    project_ticket VARCHAR(255)
);

-- Version list table
CREATE TABLE IF NOT EXISTS pa5478_version_lists (
    project_id INTEGER NOT NULL,
    released_fw VARCHAR(255) NOT NULL,
    C_id VARCHAR(255) PRIMARY KEY,
    version INTEGER NOT NULL,
    FOREIGN KEY (project_id) REFERENCES pa5478_projects(project_id)
);

-- Flash function table
CREATE TABLE IF NOT EXISTS pa5478_table_flash_func (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- Flash header table
CREATE TABLE IF NOT EXISTS pa5478_table_flash_header (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- ALG table (TP_HW_CONFIG_1_COD_FW_CONFIG)
CREATE TABLE IF NOT EXISTS pa5478_table_hw_config_1_cod_fw_config (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- Auto self table (TP_HW_CONFIG_1_AUTO_SELF)
CREATE TABLE IF NOT EXISTS pa5478_table_tp_hw_config_1_auto_self (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- Waveform F0 table
CREATE TABLE IF NOT EXISTS pa5478_table_tp_adc_config_normal_f0 (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- Waveform F1 table
CREATE TABLE IF NOT EXISTS pa5478_table_tp_adc_config_normal_f1 (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- DD header table
CREATE TABLE IF NOT EXISTS pa5478_table_dd_header (
    C_id VARCHAR(255) PRIMARY KEY,
    value TEXT NOT NULL,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- P2P table
CREATE TABLE IF NOT EXISTS pa5478_table_tp_p2p_table (
    C_id VARCHAR(255) PRIMARY KEY,
    value TEXT NOT NULL,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- TP version table
CREATE TABLE IF NOT EXISTS pa5478_table_tp_version_table (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- Others table
CREATE TABLE IF NOT EXISTS pa5478_table_others (
    C_id VARCHAR(255) PRIMARY KEY,
    FOREIGN KEY (C_id) REFERENCES pa5478_version_lists(C_id)
);

-- Users/Auth table
CREATE TABLE IF NOT EXISTS pa_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_version_lists_project ON pa5478_version_lists(project_id);
CREATE INDEX IF NOT EXISTS idx_version_lists_version ON pa5478_version_lists(version);
CREATE INDEX IF NOT EXISTS idx_projects_panel ON pa5478_projects(panel_name);

-- Insert default admin user (password: admin - CHANGE THIS IN PRODUCTION!)
-- Note: In production, use proper password hashing (bcrypt, Argon2, etc.)
-- This is a placeholder for initial setup only
INSERT OR IGNORE INTO pa_users (id, userid, password, username) 
VALUES (1, 'admin', 'admin', 'Administrator');
